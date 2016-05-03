#pragma strict

private var timerScript : TTController;

function Start()
{
	timerScript = GameObject.Find("First Person Controller").GetComponent(TTController);
}

function OnTriggerEnter(Col : Collider)
{
	if(Col.tag == "Player")
	{
		timerScript.timer += 10;
		timerScript.guiShow = true;
		Destroy(gameObject);
	}
}