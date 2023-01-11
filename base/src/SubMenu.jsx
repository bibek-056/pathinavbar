import React, { useState } from "react";


const SubMenu = ({item}) => {

    const [subnav, setSubnav]= useState(false);
    const [subnav2, setSubnav2]= useState(false);


    const showSubnav = () => setSubnav(!subnav);
    const showSubnav2 = () => setSubnav2(!subnav2);

    return (
        <>
        <div className="SidebarLink" onClick={item.subNav && showSubnav}>
        <div>
            <p className="barlabel">{item.title}</p>
        </div>
        <div>
            {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
        </div>
        { subnav && item.subNav.map((item2, index) => {
        return(
            <div>
            <div className="SidebarLink" onClick={item2.subNav2 && showSubnav2}>
                <div>
                    <p className="barlabel-s">{item2.title}</p>
                </div>
                <div>
                    {item2.subNav2 && subnav2
                    ? item2.iconOpened
                    : item2.subNav2
                    ? item2.iconClosed
                    : null}
                </div>
            </div>
            { item2.subNav2 && subnav2 && item2.subNav2.map((item3, index) => {
                return( 
                    <div className="SidebarLink">
                       <div> <p className="barlabel-xs">{item3.title}</p></div>
                    </div>
                )
            })
            }
            </div>
        )
        })
        }
        </>
    )
}

export default SubMenu;