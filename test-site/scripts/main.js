


let myImage = document.querySelector('img');
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/image03.png'){
		myImage.setAttribute('src' , 'images/image04.png');
	}
	else{
		myImage.setAttribute('src' , 'images/image03.png');
	}
}

/*声明并赋值 myButton*/
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/*该函数是用来设置用户名，并将获取的用户名添加到 h1标题后方*/
function setUserName(){
	let myName = prompt('请输入你的名字～');
	if(!myName||myName === null){
		setUserName();
	}else{
		localStorage.setItem('name' , myName);
		myHeading.textContent = myName +'好可爱';
	}
	
}



//用来判断浏览器是否存储过用户名，有存储就将h1标题改为“userName 好可爱”，无用户名就执行 setUserName()函数
if(!localStorage.getItem('name')){
	setUserName();
}else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = storedName + '好可爱';
	 
}


//用于更改用户名
myButton.onclick = function () {
	setUserName();
}




