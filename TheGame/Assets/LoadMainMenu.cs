using UnityEngine;
using System.Collections;

public class LoadMainMenu : MonoBehaviour {

	
	public void LoadMainScene(int level)
	{
		Application.LoadLevel(level);
	}
}