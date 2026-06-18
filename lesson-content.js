const lesson = localStorage.getItem("lesson");

document.getElementById("title").innerText = lesson;

const contents = {

"Integers":`

<h2>📚 Integers</h2>

<p>
Integers ni imibare yose ishobora kuba positive cyangwa negative.
</p>

<h3>Examples</h3>

<ul>
<li>-5</li>
<li>-2</li>
<li>0</li>
<li>4</li>
<li>10</li>
</ul>

`,

"Fractions":`

<h2>📚 Fractions</h2>

<p>
Fractions ni imibare ifite numerator na denominator.
</p>

<p>Urugero:</p>

<ul>
<li>1/2</li>
<li>3/4</li>
<li>5/8</li>
</ul>

`,

"Decimals":`

<h2>📚 Decimals</h2>

<p>
Decimals ni imibare irimo akadomo.
</p>

<ul>
<li>0.5</li>
<li>1.25</li>
<li>3.75</li>
</ul>

`,

"Algebra":`

<h2>📚 Algebra</h2>

<p>

x + 5 = 10

</p>

<p>

x = 5

</p>

`


};

document.getElementById("content").innerHTML =
contents[lesson] ||

`

<h2>📚 Notes ntabwo zirashyirwamo</h2>

<p>

Ushobora kuziyongeraho muri lesson-content.js

</p>

`;
