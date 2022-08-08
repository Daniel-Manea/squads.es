$('textarea').on({
    input: function () {
        var totalHeight = $(this).prop('scrollHeight') - parseInt($(this).css('padding-top')) - parseInt($(this).css('padding-bottom'));
        $(this).css({ 'height': totalHeight });
    }
});