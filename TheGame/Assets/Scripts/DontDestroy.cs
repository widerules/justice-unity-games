using UnityEngine;
using System.Collections;


public class DontDestroy : MonoBehaviour {

	public GameObject LeftJoyst;
	public GameObject RightJoyst;
	public GameObject Player;
	public GameObject Button;
	public GameObject Came;
	public GameObject EventSystem;
	
	public void ResetPosition()
	{
		Player.transform.position = new Vector3 (0, 1, 0);
		//Player.transform.velocity = new Vector3 (0, 0, 0);
		Came.transform.position = new Vector3 (0, 1, -10);
	}
	// Use this for initialization
	void Awake () 
	{
		
		DontDestroyOnLoad(this);

		if (FindObjectsOfType(GetType()).Length > 1)
		{
			Destroy(gameObject);
		}
		
	}
	void OnLevelWasLoaded(int level)
	{
		if (level > 0)
		{
			LeftJoyst.SetActive(true);
			RightJoyst.SetActive(true);
			Player.SetActive(true);
			Button.SetActive(true);
			Came.SetActive(true);
		}
		else
		{
			LeftJoyst.SetActive(false);
			RightJoyst.SetActive(false);
			Player.SetActive(false);
			Button.SetActive(false);
			Came.SetActive(false);
			EventSystem.SetActive(true);
			ResetPosition();
		}
	}
}