const SUBSCRIPTION_PRICE = 1500;
const SUBSCRIPTION_DAYS = 14;

function activateSubscription(){

const today = new Date();

const expiry = new Date();

expiry.setDate(today.getDate()+SUBSCRIPTION_DAYS);


localStorage.setItem(

"subscription",

JSON.stringify({

active:true,

expiry:expiry.toISOString()

})

);


alert(

"Subscription activated for 14 days"

);

}



function checkSubscription(){

const sub = JSON.parse(

localStorage.getItem(

"subscription"

)

);


if(!sub){

window.location.href=

"payment.html";

return false;

}


const now=new Date();

const exp=new Date(

sub.expiry

);


if(now>exp){

localStorage.removeItem(

"subscription"

);

window.location.href=

"payment.html";

return false;

}


return true;

  }
