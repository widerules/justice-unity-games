#pragma strict


var rWall : BoxCollider2D;
var lWall : BoxCollider2D;
var tWall : BoxCollider2D;
var bWall : BoxCollider2D;

var mainCam : Camera;

function resize()
{
	tWall.size= new Vector2 ( mainCam.ScreenToWorldPoint(new Vector3 ( Screen.width*2f,0f,0f)).x,1f);
	bWall.size= new Vector2 ( mainCam.ScreenToWorldPoint(new Vector3 ( Screen.width*2f,0f,0f)).x,1f);
	
	rWall.size= new Vector2 (1f, mainCam.ScreenToWorldPoint(new Vector3 ( 0f,Screen.height*2f,0f)).y);
	lWall.size= new Vector2 (1f, mainCam.ScreenToWorldPoint(new Vector3 ( 0f,Screen.height*2f,0f)).y);
}

function repose()
{
	tWall.center= new Vector2 (0f, mainCam.ScreenToWorldPoint(new Vector3 ( 0f,Screen.height,0f)).y+0.5f);
	bWall.center= new Vector2 (0f, mainCam.ScreenToWorldPoint(new Vector3 ( 0f,0f,0f)).y-0.5f);
	
	rWall.center= new Vector2 ( mainCam.ScreenToWorldPoint(new Vector3 ( Screen.width*1f,0f,0f)).x+0.5f,0f);
	lWall.center= new Vector2 ( mainCam.ScreenToWorldPoint(new Vector3 ( 0f,0f,0f)).x-0.5f,0f);
}

function Update () 
{
	resize();
	repose();
}
