const source = document.title || window.location.href; 
addEventListener('message', function(event) {
if(event.data.substring(0,12)=="setImmediate"){
	return false;
}
if(localStorage.getItem("pm_alerts")=='1' && localStorage.getItem("pm_status")=='on'){
console.debug(`postMessageDebugger activated for alerts on '${source}'`);
alert(
    `postMessage received to '${source}' from '${event.origin}' with data: `+
    JSON.stringify(event.data)
  );
}
if(localStorage.getItem("pm_console")=='1' && localStorage.getItem("pm_status")=='on'){
console.debug(`postMessageDebugger activated for console on '${source}'`);
 console.debug(
    `postMessage received by '${source}' from '${event.origin}' with data:`,
    event.data
  );
}
}); 