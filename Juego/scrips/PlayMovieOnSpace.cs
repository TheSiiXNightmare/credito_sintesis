using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class PlayMovieOnSpace : MonoBehaviour {
	MovieTexture movie;
	Renderer r;

	void Start() {
		r = GetComponent<Renderer>();
		movie = (MovieTexture)r.material.mainTexture;
		StartCoroutine(CargarNivel ());
	}

	IEnumerator CargarNivel() {
		movie.Play();
		print ("antes de segundos");
		yield return new WaitForSeconds (movie.duration);
		print ("despues de segundos");
		SceneManager.LoadScene ("finciona");
	}

}