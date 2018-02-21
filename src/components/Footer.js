import React from 'react'
import Link from 'gatsby-link'

const Footer = () =>
  <footer>
  	<ul>
  		<li><Link to="/about">about me</Link></li>
  		<li>
  			<a id="twitter" href="http://twitter.com/justsilvestrein"><i class="fa fa-twitter"></i> Twitter
  			<p id="tweet">
  				Tweet tweet
  				<span id="tweet-info">tweet tweet tweet</span>
  			</p>
  			</a>
  		</li>
  		<li><a href="https://github.com/justinsilvestre?tab=repositories"><i class="fa fa-github"></i> Github</a></li>
  		<li><a href="mailto:justinsilvestre@gmail.com"><i class="fa fa-envelope"></i> justinsilvestre@gmail.com</a></li>
  		<li><a href="https://docs.google.com/document/d/1ZdEm8Bn1Z-61WmZ1pq27CFos7-vgabrVJOiYX8odFcI/edit?usp=sharing" target="_blank">CV</a></li>
  	</ul>
  </footer>

export default Footer
