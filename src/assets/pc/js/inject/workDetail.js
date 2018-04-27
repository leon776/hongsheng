       var works = $('.work-row .col');
        var curworks = [];
        $('.pagination').pagination({
            totalData: works.length,
            showData: 12,
            coping: true,
            callback: function(api){
                curworks = [];
                var index = api.getCurrent();
                for(var i = 0;i<12;i++){
                    curworks.push(works.eq((index- 1) * 12  + i));
                }
                $('.work-row').html(curworks);
            }
        });
        for(var i = 0;i<12;i++){
            curworks.push(works.eq(i));
        }
        $('.work-row').html(curworks);
