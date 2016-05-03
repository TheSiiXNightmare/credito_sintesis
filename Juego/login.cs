using UnityEngine;
using System.Collections;

public class login : MonoBehaviour {

	public string[] items;

	IEnumerator Start() {
		WWW itemsData = new WWW("http://localhost/TheSiiXNightmare/ItemsData.php");
		yield return itemsData;
		string itemsDataString = itemsData.text;
		print (itemsDataString);
		items = itemsDataString.Split(';');
		print(GetDataValue(items[0], "User:"));
	}

	string GetDataValue(string data, string index) {
		string value = data.Substring(data.IndexOf(index)+index.Length);
		if(value.Contains("|"))value = value.Remove(value.IndexOf("|"));
		return value;
	}

}