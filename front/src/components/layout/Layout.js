import React from 'react';


export default function layout(props) {
  return (
    <div>
        <div>
            Toolbar, SideDrawer, 
        </div>
        <main>
            {props.children}
        </main>
    </div>
  );
}

