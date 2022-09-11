import styled from "@emotion/styled";

export const ButtonSubmit = styled('button')`
display:block;
width:100%;
align-items: center;
appearance: none;
background-image: radial-gradient(100% 100% at 100% 0, #73ff5a 0, #0f7621 100%);
border: 0;
border-radius: 6px;
box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
box-sizing: border-box;
color: #fff;
cursor: pointer;
display: inline-flex;
height: 48px;
justify-content: center;
line-height: 1;
list-style: none;
overflow: hidden;
padding-left: 16px;
padding-right: 16px;
position: relative;
text-align: left;
text-decoration: none;
transition: box-shadow .15s,transform .15s;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
white-space: nowrap;
will-change: box-shadow,transform;
font-size: 20px;
text-align: center;

&:hover{
    box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, #0f7621 0 7px 13px -3px, #0f7621 0 -3px 0 inset;
    transform: translateY(-2px);
};
&:focus{
    box-shadow: #0f7621 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #0f7621 0 -3px 0 inset;
};
&:active{
    box-shadow: #0f7621 0 3px 7px inset;
    transform: translateY(2px);
};

`;

export const ButtonAdd = styled('button')`
align-items: center;
appearance: none;
background-image: radial-gradient(100% 100% at 100% 0, #73ff5a 0, #0f7621 100%);
border: 0;
border-radius: 6px;
box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
box-sizing: border-box;
color: #fff;
cursor: pointer;
display: inline-flex;
height: 48px;
justify-content: center;
line-height: 1;
list-style: none;
overflow: hidden;
padding-left: 16px;
padding-right: 16px;
position: relative;
text-align: left;
text-decoration: none;
transition: box-shadow .15s,transform .15s;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
white-space: nowrap;
will-change: box-shadow,transform;
font-size: 20px;
text-align: center;

&:hover{
    box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, #0f7621 0 7px 13px -3px, #0f7621 0 -3px 0 inset;
    transform: translateY(-2px);
};
&:focus{
    box-shadow: #0f7621 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #0f7621 0 -3px 0 inset;
};
&:active{
    box-shadow: #0f7621 0 3px 7px inset;
    transform: translateY(2px);
};

`;