<?php
// Biblioteca RED 2027: mantenimiento puntual. Solo CLI; no secretos incluidos.
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
error_reporting(E_ALL);
ini_set('display_errors', 'stderr');
try {
  $mode = $argv[1] ?? 'preview';
  if (!in_array($mode, ['preview','apply','verify'], true)) throw new Exception('INVALID_MODE');
  define('RED_APP', true);
  require '/home/u871582755/domains/red.sanjosedelcitara.com/public_html/config.php';
  if (DB_NAME !== 'u871582755_red2027') throw new Exception('WRONG_DATABASE');
  $map = json_decode(<<<'MAPPING'
[["06-06","El laboratorio del color","El laboratorio del color con acuarela"],["06-07","Colores que transmiten emociones","Paisajes en café: tonos que expresan emociones"],["06-08","Dibujar con texturas","Texturas que se dibujan y se estampan"],["06-13","Patrones que se repiten","Patrones con sellos en relieve"],["06-14","Paisajes de mi entorno","Paisajes de mi entorno en acuarela"],["06-17","Imágenes que cuentan historias","Historias azules: mi primera cianotipia"],["07-05","Rostros que expresan emociones","Rostros y emociones pintados con café"],["07-07","El color en nuestras creaciones","Una paleta de acuarela para crear"],["07-08","Contrastes que transforman imágenes","Contrastes con aguadas de tinta china"],["07-09","Composiciones con identidad","Motivos de identidad impresos en linóleo"],["07-10","Mi autorretrato artístico","Mi autorretrato con aguadas"],["07-15","Imágenes que cobran vida","Imágenes que cobran vida con estampas"],["07-18","El arte de reutilizar","Huellas de luz con materiales reutilizados"],["08-03","Armonías que crean imágenes","Armonías de color en acuarela"],["08-04","Pintar para expresar emociones","Emociones y bordes con tinta china"],["08-06","Del dibujo plano al volumen","Volumen y sombra con aguadas de café"],["08-12","Geometría entre pliegues","Patrones estampados entre pliegues"],["08-13","Origami inspirado en la naturaleza","Origami y naturaleza en cianotipia"],["08-17","Trajes que cuentan historias","Estampas para diseñar un vestuario"],["09-04","El arte de reducir imágenes","Reducir imágenes y pintarlas con café"],["09-06","Objetos imposibles","Objetos imposibles en aguadas de tinta"],["09-07","La teoría del color aplicada","Una paleta de color para pintar en acuarela"],["09-09","Colores que comunican mensajes","Símbolos que comunican en relieve"],["09-14","El círculo en el diseño","El círculo impreso a punta seca"],["09-16","Geometría aplicada al arte","Geometría y luz en cianotipia"],["09-18","Vestuario e identidad cultural","Vestuario e identidad en tonos de café"],["10-02","Líneas que construyen volumen","Líneas y aguadas que construyen volumen"],["10-03","El arte de la luz y la sombra","Luz y sombra con óleo miscible con agua"],["10-08","Círculos y empalmes","Círculos y empalmes a punta seca"],["10-09","Geometría aplicada al diseño","Geometría tallada en linóleo"],["10-12","El vestuario como expresión cultural","Vestuario y pliegues pintados con café"],["10-16","Imágenes que transmiten mensajes","Mensajes visuales en cianotipia"],["10-18","Del boceto al mural","Del boceto en acuarela al mural"],["11-03","Curvas, círculos y empalmes","Curvas, círculos y empalmes a punta seca"],["11-04","De las formas al diseño creativo","De las formas a una serie de linograbados"],["11-06","El punto y la línea como expresión","Punto, línea y aguadas de acuarela"],["11-07","Construir imágenes con volumen","Volumen con aguadas de tinta china"],["11-08","La luz transforma las formas","La luz transforma las formas al óleo"],["11-12","Tradiciones que construyen identidad","Tradiciones colombianas en tonos de café"],["11-17","Imágenes que representan nuestra identidad","Nuestra identidad en cianotipia"]]
MAPPING
  ,true,512,JSON_THROW_ON_ERROR);
  if (count($map)!==40) throw new Exception('INVALID_MAP');
  $db=new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME.';charset=utf8mb4', DB_USER, DB_PASS, [
    PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC
  ]);
  $engine=$db->query("SELECT ENGINE FROM information_schema.TABLES WHERE TABLE_SCHEMA=DATABASE() AND TABLE_NAME='resources' AND TABLE_TYPE='BASE TABLE'")->fetchColumn();
  if ($engine!=='InnoDB') throw new Exception('BAD_TABLE_ENGINE');
  $cols=$db->query("SELECT COLUMN_NAME,DATA_TYPE,CHARACTER_MAXIMUM_LENGTH FROM information_schema.COLUMNS WHERE TABLE_SCHEMA=DATABASE() AND TABLE_NAME='resources'")->fetchAll();
  $codes=[];$titles=[];
  foreach($cols as $col){
    $name=strtolower($col['COLUMN_NAME']);$type=strtolower($col['DATA_TYPE']);
    if (!in_array($type,['varchar','char','text','tinytext','mediumtext','longtext'],true)) continue;
    if (in_array($name,['id','code','codigo','resource_id','red_id','red_code','codigo_red','resource_code'],true)) $codes[]=$col['COLUMN_NAME'];
    if (in_array($name,['title','titulo','nombre','name','red_title','resource_title','titulo_red'],true)) {
      $titles[]=$col['COLUMN_NAME'];
      if ($col['CHARACTER_MAXIMUM_LENGTH']!==null && (int)$col['CHARACTER_MAXIMUM_LENGTH']<max(array_map(fn($x)=>mb_strlen($x[2]),$map))) throw new Exception('TITLE_COLUMN_TOO_SHORT');
    }
  }
  if (count($codes)!==1||count($titles)!==1||$codes[0]===$titles[0]) throw new Exception('AMBIGUOUS_SCHEMA');
  $c='`'.str_replace('`','``',$codes[0]).'`';$t='`'.str_replace('`','``',$titles[0]).'`';
  $total=(int)$db->query('SELECT COUNT(*) FROM resources')->fetchColumn();
  if ($total!==120) throw new Exception('RESOURCE_COUNT_'.$total);
  $select=$db->prepare("SELECT $t AS title FROM resources WHERE $c=? FOR UPDATE");
  $update=$db->prepare("UPDATE resources SET $t=? WHERE $c=? AND BINARY $t=BINARY ?");
  $db->beginTransaction();
  try {
    foreach(['06-01'=>'El punto: origen de la imagen','08-02'=>'El laboratorio de las tonalidades','09-03'=>'Ampliar sin deformar'] as $key=>$value){
      $select->execute([$key]);$found=$select->fetchAll();
      if(count($found)!==1||$found[0]['title']!==$value) throw new Exception('CATALOG_ANCHOR_'.$key);
    }
    $before=[];$pending=[];$already=0;
    foreach($map as $row){
      [$key,$old,$new]=$row;
      $select->execute([$key]);$found=$select->fetchAll();
      if(count($found)!==1)throw new Exception('MISSING_OR_DUPLICATE_'.$key);
      $current=$found[0]['title'];$before[$key]=$current;
      if($current===$old)$pending[]=$row;
      elseif($current===$new)$already++;
      else throw new Exception('UNEXPECTED_TITLE_'.$key);
    }
    echo "VALIDATED total=$total targets=40 pending=".count($pending)." already=$already mode=$mode\n";
    if($mode==='preview'){ $db->rollBack();exit(0); }
    if($mode==='verify'){
      if(count($pending)!==0) throw new Exception('VERIFY_INCOMPLETE');
      echo "VERIFIED_40\n";$db->rollBack();exit(0);
    }
    if(count($pending)===0){echo "ALREADY_APPLIED_40\n";$db->rollBack();exit(0);}
    $backup='/home/u871582755/.red2027_before_20261115.json';
    if(file_exists($backup)) {
      $oldfile=json_decode(file_get_contents($backup),true);
      if(($oldfile['database']??'')!==DB_NAME||count($oldfile['rows']??[])!==40)throw new Exception('BACKUP_CONFLICT');
    } else {
      $payload=json_encode(['database'=>DB_NAME,'date'=>date('c'),'rows'=>$before],JSON_UNESCAPED_UNICODE|JSON_THROW_ON_ERROR);
      if(file_put_contents($backup,$payload,LOCK_EX)!==strlen($payload))throw new Exception('BACKUP_FAILURE');
      chmod($backup,0600);
    }
    $changed=0;
    foreach($pending as [$key,$old,$new]){
      $update->execute([$new,$key,$old]);
      if($update->rowCount()!==1)throw new Exception('UPDATE_FAILED_'.$key);
      $changed++;
    }
    foreach($map as [$key,$old,$new]){
      $select->execute([$key]);$found=$select->fetchAll();
      if(count($found)!==1||$found[0]['title']!==$new)throw new Exception('POSTCHECK_'.$key);
    }
    $db->commit();
    echo "APPLIED_AND_VERIFIED_40 changed=$changed already=$already total=$total\n";
  }catch(Throwable $e){if($db->inTransaction())$db->rollBack();throw $e;}
}catch(Throwable $e){fwrite(STDERR,"ERROR:".$e->getMessage()."\n");exit(2);}
