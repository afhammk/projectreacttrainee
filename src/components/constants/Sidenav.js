import React, { Component } from 'react'

import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import RedditIcon from '@material-ui/icons/Reddit';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CreditCardIcon from '@material-ui/icons/CreditCard';


export const SideItems = [
    {
        title: "Home",
        icon:( <HomeIcon />),
        submenu: [],
        divider:false,
        href:"/"
    },
    {
        title: "Brands",
        icon:( <RedditIcon />),
        submenu: [],
        divider:false,
        href:"/brands"
    },
    {
        title: "Forms",
        icon:( <FormatAlignJustifyIcon />),
        submenu: [],
        divider:false,
        href:"/forms"
    },
    {
        title: "Categories",
        icon:( <CategoryIcon />),
        submenu: [],
        divider:false,
        href:"/categories"
    },
  
    {
        title: "Items",
        icon:( <PlaylistAddCheckIcon />),
        submenu: [],
        divider:false,
        href:"/items"
    }, 
    {
        title: "Suppliers",
        icon:( <LocalLibraryIcon />),
        submenu: [
            {
                title: "Supplier Categories",
                icon:( <LocalLibraryIcon />),
                submenu: [],
                divider:false,
                href:"/supplierCategories"
            },
            {
                title: "Suppliers",
                icon:( <LocalLibraryIcon />),
                submenu: [],
                divider:false,
                href:"/suppliers"
            }
        ],
        divider:false, 
    }, 
    {
        title: "Vendors",
        icon:( <PeopleAltIcon />),
        submenu: [
            {
                title: "Vendor Categories",
                icon:( <PeopleAltIcon />),
                submenu: [],
                divider:false,
                href:"/vendorCategories"
            }
            
        ],
        divider:false, 
    }, 
    {
        title: "Purchase",
        icon:( <CreditCardIcon />),
        submenu: [
            {
                title: "New Purchase Order",
                icon:( <CreditCardIcon />),
                submenu: [],
                divider:false,
                href:"/newPurchaseOrder"
            }
            
        ],
        divider:false, 
    }, 
    {
        title: "Organization",
        icon:( <RedditIcon />),
        submenu: [
            {
                title: "Warehouse Types",
                icon:( <RedditIcon />),
                submenu: [],
                divider:false,
                href:"/warehouseTypes"
            },
            {
                title: "Warehouses",
                icon:( <RedditIcon />),
                submenu: [],
                divider:false,
                href:"/warehouses"
            }, 
            {
                title: "Branches",
                icon:( <RedditIcon />),
                submenu: [],
                divider:false,
                href:"/branches"
            }
        ],
        divider:false, 
    },
    {
        title: "Locations",
        icon:( <LocationOnIcon />),
        submenu: [
            {
                title: "Countries",
                icon:( <LocationOnIcon />),
                submenu: [],
                divider:false,
                href:"/countries"
            },
            {
                title: "States",
                icon:( <LocationOnIcon />),
                submenu: [],
                divider:false,
                href:"/states"
            },
            {
                title: "Cities",
                icon:( <LocationOnIcon />),
                submenu: [],
                divider:false,
                href:"/cities"
            }
        ],
        divider:false
    },
   
]