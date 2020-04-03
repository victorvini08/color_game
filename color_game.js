
var squares=document.querySelectorAll(".square");

var colors=randColors(6);
var gameOver=false;

var easy_game=document.querySelector("#easy");
var hard_game=document.querySelector("#hard");

function randColors(no)
{
	var c=[];
	for(var i=0;i<no;i++)
	{
		var r=	Number(Math.floor(Math.random()*256));
		var g=	Number(Math.floor(Math.random()*256));
		var b=	Number(Math.floor(Math.random()*256));
     
       c[i]="rgb("+r+", "+g+", "+b+")";
       

	}
	return c;
}
var new_color=document.querySelector("#new");
var jumbo=document.querySelector(".jumbotron");
var text_goal_color=document.querySelector("#yo");
var goal_color=colors[Number(Math.floor(Math.random()*6))];
var messages=document.querySelector("#message");
for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
}

text_goal_color.textContent = goal_color;

for(var i=0;i<squares.length;i++)
{
	squares[i].addEventListener("click",
    function()
    {
         var clickedColor=this.style.backgroundColor;
       
       
       if(!gameOver)
       {
         if(clickedColor==goal_color)
         {
         	for(var j=0;j<squares.length;j++)
         	{
         		squares[j].style.backgroundColor=clickedColor;
         	}
         	messages.textContent="Yippeee";
         	gameOver=true;
            jumbo.style.backgroundColor=clickedColor;

         }
         else
         {
         	this.style.backgroundColor="#232323";
         	messages.textContent="Try Again";
         }
     }
	}
	)
}

new_color.addEventListener("click",
function()
{
 
  colors=randColors(6);
   for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
}
  goal_color=colors[Number(Math.floor(Math.random()*6))];
 
text_goal_color.textContent = goal_color;
  messages.textContent="";
   gameOver=false;

}
);

easy_game.addEventListener("click",
function()
{
  colors=randColors(3);
   for(var i=0;i<colors.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
}
squares[3].style.backgroundColor="#232323";
squares[4].style.backgroundColor="#232323";
squares[5].style.backgroundColor="#232323";
  goal_color=colors[Number(Math.floor(Math.random()*3))];
 
text_goal_color.textContent = goal_color;
  messages.textContent="";
   gameOver=false;

}
);


hard_game.addEventListener("click",
function()
{
 
  colors=randColors(6);
   for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
}
  goal_color=colors[Number(Math.floor(Math.random()*6))];
 
text_goal_color.textContent = goal_color;
  messages.textContent="";
   gameOver=false;

}
);

