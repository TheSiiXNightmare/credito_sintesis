using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class LoginController : MonoBehaviour {

	private const string Login = "Last";
	private const string Pass = "1234";
	[SerializeField]
	private InputField usuarioField = null;
	[SerializeField]
	private InputField paswordField = null;
	[SerializeField]
	private Text Feedbaking = null;
	[SerializeField]
	private Toggle RememberData = null;

	
	// Use this for initialization
	void Start () {
		if (PlayerPrefs.HasKey ("memoria") && PlayerPrefs.GetInt ("memoria") == 1) {
			usuarioField.text = PlayerPrefs.GetString ("rememberUsuario");
			paswordField.text = PlayerPrefs.GetString ("rememberContrasena");
		}
	}
	
	// Update is called once per frame
	public void logIn () {
		string usuario = usuarioField.text;
		string contrasena = paswordField.text;

		if (RememberData.isOn) {
			PlayerPrefs.SetInt ("memoria", 1);
			PlayerPrefs.SetString ("rememberUsuario", usuario);
			PlayerPrefs.SetString ("rememberContrasena", contrasena);
		}

		if (usuario == Login && contrasena == Pass) {
			Feedbaking.CrossFadeAlpha (100f, 0f, false);
			Feedbaking.color = Color.green;
			Feedbaking.text = "Conectado correctamente\nCargando juego...";
			StartCoroutine (CargarNivel ());
		} else {
			Feedbaking.CrossFadeAlpha (100f, 1f, false);
			Feedbaking.color = Color.red;
			Feedbaking.text = "Usuario o contrasena incorrectos";
			Feedbaking.CrossFadeAlpha (0f, 2f, false);
			usuarioField.text = "";
			paswordField.text = "";
		}
	}

	IEnumerator CargarNivel() {
		yield return new WaitForSeconds (5);
		SceneManager.LoadScene ("nivel");
	}
}
