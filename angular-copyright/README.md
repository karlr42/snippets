An Angular directice for generating copyright notices(for footers, etc.).


Takes the form 
`'<copyright> © <start year>[-end year]. <message>'`

Example plunkr: http://plnkr.co/edit/zAJrBd?p=preview

### Attributes:
 - **start** : the year the copyright begins. If not set, defaults to the current year
 - **localised-copyright** : a string for the word 'Copyright'.
 - **message** : the message after the years (e.g 'All Rights Reserved."
 - **norange** : if the start date is in the past, only show it, do not show "startYear-currentYear"