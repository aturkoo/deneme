$(document).ready(function () {

    var popQuizNotlari = [];
    var haberliQuizNotlari = [];
    var midTermNotlari = [];

    var popQuizCons = 0.25;
    var haberliQuizCons = 0.125;
    var midTermCons = 0.625;

    var selectList = $('#pqsayisi');
    var inputs = $('.not-input');
    selectList.change(function () {
        var selectedNum = $(this).val();
        inputs.each(function (index, elem) {
            if (index <= selectedNum - 1) {
                $(elem).show();
            }
            else {
                $(elem).hide();
            }
        });
    });

    var selectList1 = $('#aqsayisi');
    var inputs1 = $('.not-input1');
    selectList1.change(function () {
        var selectedNum1 = $(this).val();
        inputs1.each(function (index, elem) {
            if (index <= selectedNum1 - 1) {
                $(elem).show();
            }
            else {
                $(elem).hide();
            }
        });
    });

    var selectList2 = $('#mtsayisi');
    var inputs2 = $('.not-input2');
    selectList2.change(function () {
        var selectedNum2 = $(this).val();
        inputs2.each(function (index, elem) {
            if (index <= selectedNum2 - 1) {
                $(elem).show();
            }
            else {
                $(elem).hide();
            }
        });
    });

    $('#hesapla').click(function () {
        var popQuizSayisi = selectList.val();
        var haberliQuizSayisi = selectList1.val();
        var midTermSayisi = selectList2.val();

        var girilenPop = $('.pqNotu');
        var girilenHaberli = $('.aqNotu');
        var girilenMidterm = $('.mtNotu');

        if (popQuizSayisi == "0" || haberliQuizSayisi == "0" || midTermSayisi == "0") {
            alert("Sınav sayıları boş bırakılamaz");
        } else {
            girilenPop.each(function (i, elem) {
                if (i < popQuizSayisi) {
                    popQuizNotlari.push($(elem).val());
                }
            });
            girilenHaberli.each(function (i, elem) {
                if (i < haberliQuizSayisi) {
                    haberliQuizNotlari.push($(elem).val());
                }
            });
            girilenMidterm.each(function (i, elem) {
                if (i < midTermSayisi) {
                    midTermNotlari.push($(elem).val());
                }
            });

            var toplamPop = 0;
            var toplamHaberli = 0;
            var toplamMidterm = 0;

            popQuizNotlari.forEach(function (elem, i) {
                toplamPop += parseInt(elem);
            });
            haberliQuizNotlari.forEach(function (elem, i) {
                toplamHaberli += parseInt(elem);
            });
            midTermNotlari.forEach(function (elem, i) {
                toplamMidterm += parseInt(elem);
            });

            var sonuc = ((toplamPop / popQuizSayisi) * popQuizCons) + ((toplamHaberli / haberliQuizSayisi) * haberliQuizCons) + ((toplamMidterm / midTermSayisi) * midTermCons);

            alert(sonuc);

            popQuizNotlari = [];
            haberliQuizNotlari = [];
            midTermNotlari = [];
        }


    });


});