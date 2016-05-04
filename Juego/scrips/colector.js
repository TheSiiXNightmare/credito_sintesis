
var coins;
coins = 10;
var continua : boolean = true;
var timer : float = 0.0;
var plusTime : float = 0.0;
var guiShow : boolean = false;

// funcion que nos mostrara el tiempo y las monedas que nos faltan por cojer
function OnGUI()
{
	GUI.Box(Rect(10, 20, 35, 20), "" + timer.ToString("0"));
	
	if(guiShow == true)
	{
		GUI.Box(Rect(65, 20, 35, 20), "+" + plusTime.ToString("0"));
		ShowGUI();
	}
	if (continua) {
		GUILayout.Label( "Monedas restantes: " + coins );
	}else{
		GUILayout.Label( "felicidades has acabado en: "  + coins + " segundos" );
	}
}

function ShowGUI()
{
	yield WaitForSeconds(2);
	guiShow = false;
}

//funcion que hace que las monedas desaparezcan en el momento en el que nuestro personaje entra en contacto con ellas y una vez llegado a 0 cambia el valor de continua a false
function OnTriggerEnter(other: Collider) {
	if (other.gameObject.tag == "coin") {
		Destroy(other.gameObject);
		coins--;
		if (coins == 0) {
			continua = false;
			coins = timer;
			
		}
	}
}
// funcion que actualiza mediante el update, el tiempo que ha transcurrido desde que empieza a jugar hasta que continua cambie su valor a false
function Update()
{
	if (continua) {
		timer += Time.deltaTime;
	}
}
