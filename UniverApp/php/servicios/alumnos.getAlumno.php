<?php
//Incluir la clase de base de datos
include_once("../classes/class.Database.php");

//Retorna un Json
header('Content-Type: application/json;');

//VERIFICA QUE VENGA EL PARAMETRO
if(!isset($_GET['c'])){
	echo json_encode(array('err' => true,'mensaje'=>"Falta el codigo"));
}
//DESINFECTAR ELPARAMETRO
$codigo = htmlentities($_GET['c']);

//VERIFICAR SI EXISTE
$sql = "SELECT count(*) as Existe FROM alumnos WHERE codigo= ".$codigo;
$existe=Database::get_valor_query($sql,"Existe");

if($existe == 1){
	//Si EXISTE,IMPRIME EL JSON
	$sql ="SELECT * FROM alumnos WHERE codigo = ".$codigo;
	echo json_enode(Database::get_Row($sql));
}else {
	echo json_encode(array('err'=true,'mesaje'=>'Código no existe')):
}