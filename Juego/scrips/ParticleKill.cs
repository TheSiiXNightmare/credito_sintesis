using UnityEngine;
using System.Collections;

public class ParticleKill : MonoBehaviour 
{
	void Update () {
		if (!gameObject.GetComponent<ParticleSystem>().isPlaying)
			Destroy(gameObject);
	}
}
