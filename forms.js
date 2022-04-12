// removes all option elements in select box 
function removeAllOptions(sel, removeGrp) {
    var len, groups, par;
    if (removeGrp) {
        groups = sel.getElementsByTagName('optgroup');
        len = groups.length;
        for (var i=len; i; i--) {
            sel.removeChild( groups[i-1] );
        }
    }
    
    len = sel.options.length;
    for (var i=len; i; i--) {
        par = sel.options[i-1].parentNode;
        par.removeChild( sel.options[i-1] );
    }
}

function appendDataToSelect(sel, obj) {
    var f = document.createDocumentFragment();
    var labels = [], group, opts;
    
    function addOptions(obj) {
        var f = document.createDocumentFragment();
        var o;
        
        for (var i=0, len=obj.text.length; i<len; i++) {
            o = document.createElement('option');
            o.appendChild( document.createTextNode( obj.text[i] ) );
            
            if ( obj.value ) {
                o.value = obj.value[i];
            }
            
            f.appendChild(o);
        }
        return f;
    }
    
    if ( obj.text ) {
        opts = addOptions(obj);
        f.appendChild(opts);
    } else {
        for ( var prop in obj ) {
            if ( obj.hasOwnProperty(prop) ) {
                labels.push(prop);
            }
        }
        
        for (var i=0, len=labels.length; i<len; i++) {
            group = document.createElement('optgroup');
            group.label = labels[i];
            f.appendChild(group);
            opts = addOptions(obj[ labels[i] ] );
            group.appendChild(opts);
        }
    }
    sel.appendChild(f);
}

// anonymous function assigned to onchange event of controlling select box
document.forms['mMark1F'].elements['mMark1Col'].onchange = function(e) {
    // name of associated select box
    var relNameM1 = 'mMark1Shp';
    
    // reference to associated select box 
    var relListM1 = this.form.elements[ relNameM1 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objM1 = Select_List_Data[ relNameM1 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListM1, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListM1, objM1);
};
document.forms['mMark2F'].elements['mMark2Col'].onchange = function(e) {
    // name of associated select box
    var relNameM2 = 'mMark2Shp';
    
    // reference to associated select box 
    var relListM2 = this.form.elements[ relNameM2 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objM2 = Select_List_Data[ relNameM2 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListM2, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListM2, objM2);
};
document.forms['mMark3F'].elements['mMark3Col'].onchange = function(e) {
    // name of associated select box
    var relNameM3 = 'mMark3Shp';
    
    // reference to associated select box 
    var relListM3 = this.form.elements[ relNameM3 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objM3 = Select_List_Data[ relNameM3 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListM3, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListM3, objM3);
};
document.forms['mMark4F'].elements['mMark4Col'].onchange = function(e) {
    // name of associated select box
    var relNameM4 = 'mMark4Shp';
    
    // reference to associated select box 
    var relListM4 = this.form.elements[ relNameM4 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objM4 = Select_List_Data[ relNameM4 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListM4, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListM4, objM4);
};
document.forms['mMark5F'].elements['mMark5Col'].onchange = function(e) {
    // name of associated select box
    var relNameM5 = 'mMark5Shp';
    
    // reference to associated select box 
    var relListM5 = this.form.elements[ relNameM5 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objM5 = Select_List_Data[ relNameM5 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListM5, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListM5, objM5);
};
document.forms['mMark6F'].elements['mMark6Col'].onchange = function(e) {
    // name of associated select box
    var relNameM6 = 'mMark6Shp';
    
    // reference to associated select box 
    var relListM6 = this.form.elements[ relNameM6 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objM6 = Select_List_Data[ relNameM6 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListM6, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListM6, objM6);
};
document.forms['mMark7F'].elements['mMark7Col'].onchange = function(e) {
    // name of associated select box
    var relNameM7 = 'mMark7Shp';
    
    // reference to associated select box 
    var relListM7 = this.form.elements[ relNameM7 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objM7 = Select_List_Data[ relNameM7 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListM7, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListM7, objM7);
};
document.forms['mMark8F'].elements['mMark8Col'].onchange = function(e) {
    // name of associated select box
    var relNameM8 = 'mMark8Shp';
    
    // reference to associated select box 
    var relListM8 = this.form.elements[ relNameM8 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objM8 = Select_List_Data[ relNameM8 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListM8, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListM8, objM8);
};
document.forms['mMark9F'].elements['mMark9Col'].onchange = function(e) {
    // name of associated select box
    var relNameM9 = 'mMark9Shp';
    
    // reference to associated select box 
    var relListM9 = this.form.elements[ relNameM9 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objM9 = Select_List_Data[ relNameM9 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListM9, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListM9, objM9);
};
document.forms['mMark10F'].elements['mMark10Col'].onchange = function(e) {
    // name of associated select box
    var relNameM10 = 'mMark10Shp';
    
    // reference to associated select box 
    var relListM10 = this.form.elements[ relNameM10 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objM10 = Select_List_Data[ relNameM10 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListM10, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListM10, objM10);
};
document.forms['fMark1F'].elements['fMark1Col'].onchange = function(e) {
    // name of associated select box
    var relNameF1 = 'fMark1Shp';
    
    // reference to associated select box 
    var relListF1 = this.form.elements[ relNameF1 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objF1 = Select_List_Data[ relNameF1 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListF1, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListF1, objF1);
};
document.forms['fMark2F'].elements['fMark2Col'].onchange = function(e) {
    // name of associated select box
    var relNameF2 = 'fMark2Shp';
    
    // reference to associated select box 
    var relListF2 = this.form.elements[ relNameF2 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objF2 = Select_List_Data[ relNameF2 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListF2, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListF2, objF2);
};
document.forms['fMark3F'].elements['fMark3Col'].onchange = function(e) {
    // name of associated select box
    var relNameF3 = 'fMark3Shp';
    
    // reference to associated select box 
    var relListF3 = this.form.elements[ relNameF3 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objF3 = Select_List_Data[ relNameF3 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListF3, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListF3, objF3);
};
document.forms['fMark4F'].elements['fMark4Col'].onchange = function(e) {
    // name of associated select box
    var relNameF4 = 'fMark4Shp';
    
    // reference to associated select box 
    var relListF4 = this.form.elements[ relNameF4 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objF4 = Select_List_Data[ relNameF4 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListF4, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListF4, objF4);
};
document.forms['fMark5F'].elements['fMark5Col'].onchange = function(e) {
    // name of associated select box
    var relNameF5 = 'fMark5Shp';
    
    // reference to associated select box 
    var relListF5 = this.form.elements[ relNameF5 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objF5 = Select_List_Data[ relNameF5 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListF5, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListF5, objF5);
};
document.forms['fMark6F'].elements['fMark6Col'].onchange = function(e) {
    // name of associated select box
    var relNameF6 = 'fMark6Shp';
    
    // reference to associated select box 
    var relListF6 = this.form.elements[ relNameF6 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objF6 = Select_List_Data[ relNameF6 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListF6, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListF6, objF6);
};
document.forms['fMark7F'].elements['fMark7Col'].onchange = function(e) {
    // name of associated select box
    var relNameF7 = 'fMark7Shp';
    
    // reference to associated select box 
    var relListF7 = this.form.elements[ relNameF7 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objF7 = Select_List_Data[ relNameF7 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListF7, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListF7, objF7);
};
document.forms['fMark8F'].elements['fMark8Col'].onchange = function(e) {
    // name of associated select box
    var relNameF8 = 'fMark8Shp';
    
    // reference to associated select box 
    var relListF8 = this.form.elements[ relNameF8 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objF8 = Select_List_Data[ relNameF8 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListF8, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListF8, objF8);
};
document.forms['fMark9F'].elements['fMark9Col'].onchange = function(e) {
    // name of associated select box
    var relNameF9 = 'fMark9Shp';
    
    // reference to associated select box 
    var relListF9 = this.form.elements[ relNameF9 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objF9 = Select_List_Data[ relNameF9 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListF9, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListF9, objF9);
};
document.forms['fMark10F'].elements['fMark10Col'].onchange = function(e) {
    // name of associated select box
    var relNameF10 = 'fMark10Shp';
    
    // reference to associated select box 
    var relListF10 = this.form.elements[ relNameF10 ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var objF10 = Select_List_Data[ relNameF10 ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relListF10, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relListF10, objF10);
};


// populate associated select box as page loads
(function() { // immediate function to avoid globals
    
    var formM1 = document.forms['mMark1F'];
    var formM2 = document.forms['mMark2F'];
    var formM3 = document.forms['mMark3F'];
    var formM4 = document.forms['mMark4F'];
    var formM5 = document.forms['mMark5F'];
    var formM6 = document.forms['mMark6F'];
    var formM7 = document.forms['mMark7F'];
    var formM8 = document.forms['mMark8F'];
    var formM9 = document.forms['mMark9F'];
    var formM10 = document.forms['mMark10F'];
    var formF1 = document.forms['fMark1F'];
    var formF2 = document.forms['fMark2F'];
    var formF3 = document.forms['fMark3F'];
    var formF4 = document.forms['fMark4F'];
    var formF5 = document.forms['fMark5F'];
    var formF6 = document.forms['fMark6F'];
    var formF7 = document.forms['fMark7F'];
    var formF8 = document.forms['fMark8F'];
    var formF9 = document.forms['fMark9F'];
    var formF10 = document.forms['fMark10F'];
    
    // reference to controlling select box
    var selM1 = formM1.elements['mMark1Col'];
    var selM2 = formM2.elements['mMark2Col'];
    var selM3 = formM3.elements['mMark3Col'];
    var selM4 = formM4.elements['mMark4Col'];
    var selM5 = formM5.elements['mMark5Col'];
    var selM6 = formM6.elements['mMark6Col'];
    var selM7 = formM7.elements['mMark7Col'];
    var selM8 = formM8.elements['mMark8Col'];
    var selM9 = formM9.elements['mMark9Col'];
    var selM10 = formM10.elements['mMark10Col'];
    var selF1 = formF1.elements['fMark1Col'];
    var selF2 = formF2.elements['fMark2Col'];
    var selF3 = formF3.elements['fMark3Col'];
    var selF4 = formF4.elements['fMark4Col'];
    var selF5 = formF5.elements['fMark5Col'];
    var selF6 = formF6.elements['fMark6Col'];
    var selF7 = formF7.elements['fMark7Col'];
    var selF8 = formF8.elements['fMark8Col'];
    var selF9 = formF9.elements['fMark9Col'];
    var selF10 = formF10.elements['fMark10Col'];
    sel.selectedIndex = 0;
    
    // name of associated select box
    var relNameM1 = 'mMark1Shp';
    var relNameM2 = 'mMark2Shp';
    var relNameM3 = 'mMark3Shp';
    var relNameM4 = 'mMark4Shp';
    var relNameM5 = 'mMark5Shp';
    var relNameM6 = 'mMark6Shp';
    var relNameM7 = 'mMark7Shp';
    var relNameM8 = 'mMark8Shp';
    var relNameM9 = 'mMark9Shp';
    var relNameM10 = 'mMark10Shp';
    var relNameM1 = 'fMark1Shp';
    var relNameF2 = 'fMark2Shp';
    var relNameF3 = 'fMark3Shp';
    var relNameF4 = 'fMark4Shp';
    var relNameF5 = 'fMark5Shp';
    var relNameF6 = 'fMark6Shp';
    var relNameF7 = 'fMark7Shp';
    var relNameF8 = 'fMark8Shp';
    var relNameF9 = 'fMark9Shp';
    var relNameF10 = 'fMark10Shp';
    // reference to associated select box
    var relM1 = formM1.elements[ relNameM1 ];
    var relM2 = formM2.elements[ relNameM2 ];
    var relM3 = formM3.elements[ relNameM3 ];
    var relM4 = formM4.elements[ relNameM4 ];
    var relM5 = formM5.elements[ relNameM5 ];
    var relM6 = formM6.elements[ relNameM6 ];
    var relM7 = formM7.elements[ relNameM7 ];
    var relM8 = formM8.elements[ relNameM8 ];
    var relM9 = formM9.elements[ relNameM9 ];
    var relM10 = formM10.elements[ relNameM10 ];
    var relF1 = formM1.elements[ relNameF1 ];
    var relF2 = formM2.elements[ relNameF2 ];
    var relF3 = formM3.elements[ relNameF3 ];
    var relF4 = formM4.elements[ relNameF4 ];
    var relF5 = formM5.elements[ relNameF5 ];
    var relF6 = formM6.elements[ relNameF6 ];
    var relF7 = formM7.elements[ relNameF7 ];
    var relF8 = formM8.elements[ relNameF8 ];
    var relF9 = formM9.elements[ relNameF9 ];
    var relF10 = formM10.elements[ relNameF10 ];
    
    // get data for associated select box passing its name
    // and value of selected in controlling select box
    var dataM1 = Select_List_Data[ relNameM1 ][ selM1.value ];
    var dataM2 = Select_List_Data[ relNameM2 ][ selM2.value ];
    var dataM3 = Select_List_Data[ relNameM3 ][ selM3.value ];
    var dataM4 = Select_List_Data[ relNameM4 ][ selM4.value ];
    var dataM5 = Select_List_Data[ relNameM5 ][ selM5.value ];
    var dataM6 = Select_List_Data[ relNameM6 ][ selM6.value ];
    var dataM7 = Select_List_Data[ relNameM7 ][ selM7.value ];
    var dataM8 = Select_List_Data[ relNameM8 ][ selM8.value ];
    var dataM9 = Select_List_Data[ relNameM9 ][ selM9.value ];
    var dataM10 = Select_List_Data[ relNameM10 ][ selM10.value ];
    var dataF1 = Select_List_Data[ relNameF1 ][ selF1.value ];
    var dataF2 = Select_List_Data[ relNameF2 ][ selF2.value ];
    var dataF3 = Select_List_Data[ relNameF3 ][ selF3.value ];
    var dataF4 = Select_List_Data[ relNameF4 ][ selF4.value ];
    var dataF5 = Select_List_Data[ relNameF5 ][ selF5.value ];
    var dataF6 = Select_List_Data[ relNameF6 ][ selF6.value ];
    var dataF7 = Select_List_Data[ relNameF7 ][ selF7.value ];
    var dataF8 = Select_List_Data[ relNameF8 ][ selF8.value ];
    var dataF9 = Select_List_Data[ relNameF9 ][ selF9.value ];
    var dataF10 = Select_List_Data[ relNameF10 ][ selF10.value ];
    
    // add options to associated select box
    appendDataToSelect(relM1, dataM1);
    appendDataToSelect(relM2, dataM2);
    appendDataToSelect(relM3, dataM3);
    appendDataToSelect(relM4, dataM4);
    appendDataToSelect(relM5, dataM5);
    appendDataToSelect(relM6, dataM6);
    appendDataToSelect(relM7, dataM7);
    appendDataToSelect(relM8, dataM8);
    appendDataToSelect(relM9, dataM9);
    appendDataToSelect(relM10, dataM10);
    appendDataToSelect(relF1, dataF1);
    appendDataToSelect(relF2, dataF2);
    appendDataToSelect(relF3, dataF3);
    appendDataToSelect(relF4, dataF4);
    appendDataToSelect(relF5, dataF5);
    appendDataToSelect(relF6, dataF6);
    appendDataToSelect(relF7, dataF7);
    appendDataToSelect(relF8, dataF8);
    appendDataToSelect(relF9, dataF9);
    appendDataToSelect(relF10, dataF10);
    
}());