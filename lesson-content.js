const lesson =

localStorage.getItem(

"lesson"

);

document.getElementById(

"title"

).innerText=

lesson;



const contents={


"Integers":

`

<h3>Definition</h3>

<p>

Integers ni imibare yose

ishobora kuba

negative cyangwa positive.

</p>


<h3>Examples</h3>

<p>

-5

-3

0

2

10

</p>


<h3>Exercise</h3>

<p>

1. Vuga integers 5

</p>

`,



"Fractions":

`

<p>

Fractions ni imibare

ifite numerator

na denominator

</p>

`,



"Force":

`

<p>

Force ni ugusunika

cyangwa gukurura

ikintu.

</p>

`

};



document.getElementById(

"content"

).innerHTML=

contents[lesson]

||

"<h3>No lesson</h3>";
