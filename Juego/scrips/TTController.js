#pragma strict

var timer : float = 10.0;
var plusTime : float = 10.0;

var guiShow : boolean = false;

function Update()
{
	timer -= Time.deltaTime;
	
	if(timer <= 0)
	{
		timer = 0;
	}
}

function OnGUI()
{
	GUI.Box(Rect(10, 10, 50, 20), "" + timer.ToString("0"));
	
	if(guiShow == true)
	{
		GUI.Box(Rect(65, 10, 50, 20), "+" + plusTime.ToString("0"));
		ShowGUI();
	}
}

function ShowGUI()
{
	yield WaitForSeconds(2);
	guiShow = false;
}