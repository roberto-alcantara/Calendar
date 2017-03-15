function Calendar(date=new Date()) {

    date.setDate(1);

    var build = function (c) {
        var date = new Date(c.start);
        var day = date.getDay();
        date.setDate(date.getDate()-day);
        for(var i = 0; i < 5; i++) {
            var week = new Array(7);
            for(var j = 0; j < 7; j++) {
                week[j] = new Date(date);
                date.setDate(date.getDate()+1);
            }
            c.days[i] = week;
        }
    };

    this.start = date;
    this.days = new Array(5);
    
    this.getMonth = function () {
        return this.start.getMonth();
    };
    this.getYear = function () {
        return this.start.getFullYear();
    };

    this.nextMonth = function () {
        this.start.setMonth(this.start.getMonth()+1);
        build(this);
    };

    this.prevMonth = function () {
        this.start.setMonth(this.start.getMonth()-1);
        build(this);
    };

    build(this);
};