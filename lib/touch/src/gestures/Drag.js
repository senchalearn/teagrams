Ext.gesture.Drag = Ext.extend(Ext.gesture.Touch, {
    handles: ['dragstart', 'drag', 'dragend'],

    dragThreshold: 5,

    direction: 'both',

    horizontal: false,
    vertical: false,

    constructor: function() {
        Ext.gesture.Drag.superclass.constructor.apply(this, arguments);

        if (this.direction == 'both') {
            this.horizontal = true;
            this.vertical = true;
        }
        else if (this.direction == 'horizontal') {
            this.horizontal = true;
        }
        else {
            this.vertical = true;
        }

        return this;
    },
    
    onTouchStart: function(e, touch) {
        this.startX = this.previousX = touch.pageX;
        this.startY = this.previousY = touch.pageY;
        this.startTime = this.previousTime = e.timeStamp;
 
        this.dragging = false;
    },    
    
    onTouchMove: function(e, touch) {
        if (this.isLocked('drag')) {
            return;
        }
        
        var info = this.getInfo(touch);
        
        if (!this.dragging) {
            if (this.isDragging(info) && this.fire('dragstart', e, info)) {
                this.dragging = true;
                this.lock('drag', 'dragstart', 'dragend');
                this.fire('drag', e, info);
            }
        }
        else {
            this.fire('drag', e, info);
       }
    },

    onTouchEnd: function(e) {
        if (this.dragging) {
            this.fire('dragend', e, this.lastInfo);
        }
        
        this.dragging = false;
    },
    
    isDragging: function(info) {
        return (
            (this.horizontal && info.absDeltaX >= this.dragThreshold) ||
            (this.vertical && info.absDeltaY >= this.dragThreshold)
        );
    },
    
    /**
     * Method to determine whether this Sortable is currently disabled.
     * @return {Boolean} the disabled state of this Sortable.
     */
    isVertical: function() {
        return this.vertical;
    },
    
    /**
     * Method to determine whether this Sortable is currently sorting.
     * @return {Boolean} the sorting state of this Sortable.
     */
    isHorizontal: function() {
        return this.horizontal;
    }
});

Ext.regGesture('drag', Ext.gesture.Drag);