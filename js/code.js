window.addEventListener ("load", myMain, false);
function activator_deactivator(){
	if(localStorage.getItem("pm_status")!="on"){
		localStorage.setItem("pm_status","on");
		alert("PostMessage Inspector, Turned on!");
		location.reload();
	}else{
		localStorage.setItem("pm_status","off");
		alert("PostMessage Inspector, Turned off!");
		location.reload();
	}
}  
function myMain(){  
var el = document.getElementsByTagName('body')[0],elChild = document.createElement('div');
elChild.innerHTML = '<div id="pm_enabler" style="position:fixed;bottom: 2px;z-index:999999;left:70%"><button id="ActiDeactiPm" style="background:red;color: white;padding:2px;border:1px solid transparent;">Enable/Disable Extension</button></div><div id="pm_options" style="position:fixed;bottom:2px;width:100%;background:yellow;color:black;padding:10px;z-index:11111;"><B>PostMessage Debugger Tool by <a href="https://twitter.com/@rohitcoder" target="_blank">@rohitcoder</a>:</b>&nbsp;&nbsp;<input type="checkbox" id="console_check"> Console Debugging&nbsp;<input type="checkbox" id="alert_check"> Browser Alerts</div>';
el.prepend(elChild);
if(localStorage.getItem("pm_status")!='on'){
	document.getElementById("pm_options").style.display = "none";
}
if(localStorage.getItem("pm_console")=='1'){
	document.getElementById("console_check").checked = true;
}
if(localStorage.getItem("pm_alerts")=='1'){
	document.getElementById("alert_check").checked = true;
}
const console_check = document.getElementById('console_check');
console_check.addEventListener('change', (event) => {
  if (event.target.checked) { 
    localStorage.setItem("pm_console","1");
    location.reload();
  } else { 
    localStorage.removeItem("pm_console");
	location.reload();
  }
});
const alert_check = document.getElementById('alert_check');
alert_check.addEventListener('change', (event) => {
  if (event.target.checked) {
    localStorage.setItem("pm_alerts","1");
    location.reload();
  } else {
    localStorage.removeItem("pm_alerts");
	location.reload();
  }
}); 
const enabler = document.getElementById("ActiDeactiPm");
enabler.addEventListener("click",activator_deactivator);
}