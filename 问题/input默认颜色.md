```
input:-internal-autofill-selected,
input:-webkit-autofill {
  background-color: #fff;
  background-image: none;
  -webkit-box-shadow: 0 0 0 1000px #fff inset;
  box-shadow: 0 0 0 1000px #fff inset;
}

input:-webkit-autofill,input:-webkit-autofill:focus, input:-webkit-autofill:hover {
  -webkit-box-shadow: 0 0 0 60px transparent inset;
  box-shadow: inset 0 0 0 60px transparent;
  -webkit-text-fill-color: #353b3e;
  -webkit-transition: background-color 5000s ease-in-out 0s;
  transition: background-color 5000s ease-in-out 0s;
}
```