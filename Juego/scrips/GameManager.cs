using UnityEngine;
using System.Collections;

public class GameManager : MonoBehaviour 
{
	public static int PickUpCount;

	void Awake () 
	{
		PickUpCount = 0;
	}
	

	void OnGUI ()
	{
		GUI.Label (new Rect ((Screen.width / 2.0f), 25, 200, 35), string.Format ("Monedas recojidas:{0}", PickUpCount));
	}
}
