var sp2250 =2250;
var sp9000 = 9000;
var sp28000 = 28000;
var sp54000 = 54000; 
var vc300 = 300;
var vc500 = 500;

// jawara
var cb_newsp0 = 0;
var cb_newsp2000 = 2000;
var cb_newsp7000 = 7000;
var cb_newsp10000 = 10000;
var cb_top_produk0 = 0;
var cb_top_produk300 = 300;
var cb_top_produk500 = 500;
var cb_top_produk1500 = 1500;
var cb_top_produk2500 = 2500;
var cb_taging0 = 0;
var cb_taging500 = 500;
var cb_taging1000 = 1000;
var cb_taging2000 = 2000;
var cb_taging7000 = 7000;
var cb_taging8000 = 8000;
var cb_taging12000 = 12000;
var cb_super_attack = 2000;

// sultan
var cb_inject_vc0 = 0;
var cb_inject_vc = 1000;
var cb_redeem_vc0 = 0;
var cb_redeem_vc300 = 300;
var cb_redeem_vc500 = 500;
var cb_rebuy0 = 0;
var cb_rebuy500 = 500;
var cb_rebuy1000 = 1000;
var cb_rebuy3000 = 3000;
var cb_rebuy5500 = 5500;

function jawara100k(input) {
    return input*(4/100);
}

function jawara1jt(input) {
    return input*(6/100);
}

function jawara10jt(input) {
    return input*(8/100);
}

function jawara100jt(input) {
    return input*(10/100);
}

function loyalty_jawara(input) {
    return input*(3/100);
}

function sultan_basic(input) {
    return input*(0.035);
}

function sultan_premium125(input){
    return input*(0.036);
}

function sultan_premium1M(input){
    return input*(0.038);
}

function sultan_premium4M(input){
    return input*(0.04);
}

function loyalty_sultan_basic(input) {
    return input*(0.01);
}

function loyalty_sultan_premium(input) {
    return input*(0.01);
}

function total_modal(mobo,spvc,pcs) {
    return (parseInt(mobo) + parseInt(spvc))*parseInt(pcs);
}

function total_cashback_jawara(new_sp,top_product,taging,flash_sale,imei,super_attack) {
    return parseInt(new_sp) + parseInt(top_product) + parseInt(taging) + parseInt(flash_sale) + parseInt(imei) + parseInt(super_attack);
}

function total_cashback_voucher(inject_vc,redeem_vc,flash_sale,super_attack) {
    return parseInt(inject_vc) + parseInt(redeem_vc) + parseInt(flash_sale) + parseInt(super_attack);
}

function total_cashback_rebuy(rebuy,flash_sale,super_attack) {
    return parseInt(rebuy) + parseInt(flash_sale) + parseInt(super_attack);
}

function hpp_jawara(modal,total_cashback,program,loyalty) {
    return (modal -(total_cashback + program + loyalty)+((total_cashback + program + loyalty)*6/100))
}

function hpp_sultan_basic(modal,total_cashback,program,loyalty) {
    return (modal -(total_cashback + program + loyalty)+((total_cashback + program + loyalty)*6/100))
}

function hpp_sultan_premium(modal,total_cashback,program,loyalty) {
    return (modal -(total_cashback + program + loyalty)+((total_cashback + program + loyalty)*6/100))
}

class Jawara  {
    constructor (mobo,sp,pcs,cb_newsp,cb_top_product,cb_taging, cb_flash_sale, cb_imei, cb_super_attack, cb_flash_sale_stage) {
        this.mobo = mobo;
        this.sp = sp;
        this.pcs = pcs;
        this.cb_newsp = cb_newsp;
        this.cb_top_product = cb_top_product
        this.cb_taging = cb_taging
        this.cb_flash_sale = cb_flash_sale
        this.cb_flash_sale_stage = cb_flash_sale_stage
        this.cb_imei = cb_imei
        this.cb_super_attack = cb_super_attack
        this.total_cashback_pcs = total_cashback_jawara(this.cb_newsp,this.cb_top_product,this.cb_taging,this.cb_flash_sale_stage,this.cb_imei,this.cb_super_attack);
        this.total_cashback = total_cashback_jawara(this.cb_newsp,this.cb_top_product,this.cb_taging,this.cb_flash_sale,this.cb_imei,this.cb_super_attack);
        this.total_modal = this.mobo + this.sp;
    }

    modal(){
        return total_modal(this.mobo, this.sp, this.pcs);
    }

    hpp_non_jawara() {
        
        var jawara = 0;
        var loyalty = 0;
        return hpp_jawara(this.total_modal,this.total_cashback,jawara,loyalty,this.pcs);
    }

    hpp_100k(){
        
        var jawara = jawara100k(this.mobo);
        var loyalty = loyalty_jawara(this.mobo);
        return hpp_jawara(this.total_modal,this.total_cashback,jawara,loyalty,this.pcs);
    }

    hpp_1jt(){
        
        var jawara = jawara1jt(this.mobo);
        var loyalty = loyalty_jawara(this.mobo);
        return hpp_jawara(this.total_modal,this.total_cashback,jawara,loyalty,this.pcs);
    }

    hpp_10jt(){
        
        var jawara = jawara10jt(this.mobo);
        var loyalty = loyalty_jawara(this.mobo);
        return hpp_jawara(this.total_modal,this.total_cashback,jawara,loyalty,this.pcs);
    }

    hpp_100jt(){
        var jawara = jawara100jt(this.mobo);
        var loyalty = loyalty_jawara(this.mobo);
        return hpp_jawara(this.total_modal,this.total_cashback,jawara,loyalty,this.pcs);
    }

    cuan_non_jawara(){
        return this.modal() - this.hpp_non_jawara() ;
    }

    cuan_100k(){
        return this.modal() - this.hpp_100k() ;
    }

    cuan_1jt(){
        return this.modal() - this.hpp_1jt() ;
    }

    cuan_10jt(){
        return this.modal() - this.hpp_10jt() ;
    }

    cuan_100jt(){
        return this.modal() - this.hpp_100jt() ;
    }    
}

class Sultan  {
    constructor (mobo,vc,pcs,cb_inject_vc,cb_redeem_vc,cb_rebuy, cb_flash_sale, cb_super_attack) {
        this.mobo = mobo;
        this.vc = vc;
        this.pcs = pcs;
        this.cb_inject_vc = cb_inject_vc;
        this.cb_redeem_vc = cb_redeem_vc
        this.cb_rebuy = cb_rebuy
        this.cb_flash_sale = cb_flash_sale
        this.cb_super_attack = cb_super_attack
        this.total_modal = this.mobo + this.vc;
        this.cashback_v = total_cashback_voucher(this.cb_inject_vc,this.cb_redeem_vc,this.cb_flash_sale,this.cb_super_attack);
        this.cashback_r = total_cashback_rebuy(this.cb_rebuy,this.cb_flash_sale,this.cb_super_attack)
    }

    modal(){
        return total_modal(this.mobo, this.vc, this.pcs);
    }

    modal_rebuy(){
        return this.mobo*this.pcs;
    }

    hpp_basic_voucher(){
        var sultan = sultan_basic(this.mobo);
        var loyalty = loyalty_sultan_basic(this.mobo);
        return hpp_sultan_basic(this.total_modal,this.cashback_v,sultan,loyalty,this.pcs);
    }

    hpp_basic_rebuy(){
        var sultan = sultan_basic(this.mobo);
        var loyalty = loyalty_sultan_basic(this.mobo);
        var modal = this.mobo;
        return hpp_sultan_basic(modal,this.cashback_r,sultan,loyalty,this.pcs);
    }

    hpp_premium125_voucher(){
        var sultan = sultan_premium125(this.mobo);
        var loyalty = loyalty_sultan_premium(this.mobo);
        return hpp_sultan_premium(this.total_modal,this.cashback_v,sultan,loyalty,this.pcs);
    }

    hpp_premium1M_voucher(){
        var sultan = sultan_premium1M(this.mobo);
        var loyalty = loyalty_sultan_premium(this.mobo);
        return hpp_sultan_premium(this.total_modal,this.cashback_v,sultan,loyalty,this.pcs);
    }

    hpp_premium4M_voucher(){
        var sultan = sultan_premium4M(this.mobo);
        var loyalty = loyalty_sultan_premium(this.mobo);
        return hpp_sultan_premium(this.total_modal,this.cashback_v,sultan,loyalty,this.pcs);
    }

    hpp_premium125_rebuy(){
        var sultan = sultan_premium125(this.mobo);
        var loyalty = loyalty_sultan_premium(this.mobo);
        var modal = this.mobo;
        return hpp_sultan_premium(modal,this.cashback_r,sultan,loyalty,this.pcs);
    }

    hpp_premium1M_rebuy(){
        var sultan = sultan_premium1M(this.mobo);
        var loyalty = loyalty_sultan_premium(this.mobo);
        var modal = this.mobo;
        return hpp_sultan_premium(modal,this.cashback_r,sultan,loyalty,this.pcs);
    }

    hpp_premium4M_rebuy(){
        var sultan = sultan_premium4M(this.mobo);
        var loyalty = loyalty_sultan_premium(this.mobo);
        var modal = this.mobo;
        return hpp_sultan_premium(modal,this.cashback_r,sultan,loyalty,this.pcs);
    }

    cuan_basic_voucher(){
        return this.modal() - this.hpp_basic_voucher() ;
    }

    cuan_basic_rebuy(){
        return this.modal_rebuy() - this.hpp_basic_rebuy() ;
    }

    cuan_premium125_voucher(){
        return this.modal() - this.hpp_premium125_voucher() ;
    }

    cuan_premium1M_voucher(){
        return this.modal() - this.hpp_premium1M_voucher() ;
    }

    cuan_premium4M_voucher(){
        return this.modal() - this.hpp_premium4M_voucher() ;
    }

    cuan_premium125_rebuy(){
        return this.modal_rebuy() - this.hpp_premium125_rebuy() ;
    }

    cuan_premium1M_rebuy(){
        return this.modal_rebuy() - this.hpp_premium1M_rebuy() ;
    }

    cuan_premium4M_rebuy(){
        return this.modal_rebuy() - this.hpp_premium4M_rebuy() ;
    }
}

function hpp(){
        var flash_sale = 0
        var flash_sale_stage = 0
        var imei = parseInt(document.getElementById("imei").value)
        var super_attack = parseInt(document.getElementById("super-attack").value)
        var pcs = parseInt(document.getElementById("pcs").value)
        var select_paket = document.getElementById('paket');
        var select_program = document.getElementById('program');
        var paket = select_paket.options[select_paket.selectedIndex].value;
        var program = select_program.options[select_program.selectedIndex].value;

        document.getElementById("detail-jawara").style.display = "none"
        document.getElementById("detail-sultan").style.display = "none"
        document.getElementById("detail-sultan-rebuy").style.display = "none"

        var checkBox = document.getElementById("fs-check");
  
        if (checkBox.checked == true) {
            if (paket == "fi3" || paket == "fc6" || paket == "fi5" || paket == "fu1") {
                if (program == "jwr100k" || program == "jwr1jt" || program == "jwr10jt" || program == "jwr100jt"){
                    if (pcs <= 15){
                        flash_sale_stage = 500 *pcs
                        flash_sale = 500
                    }
                    else if (pcs >=16 && pcs <= 30){
                        var total = ((pcs - 15) * 1000) + 15*500
                        flash_sale_stage = total
                        flash_sale = 1000
                    }
                    else {
                        var total = ((pcs - 30) * 500) + (15*500) + (15*1000)
                        flash_sale_stage = total
                        flash_sale = 500
                    }
                }
                else{
                    flash_sale=0
                }
            }

            else if (paket == "fc20" || paket == "fi13" || paket == "fu3" || paket == "fu7") {
                if (program == "sltvoucher" || program == "sltp125voucher" || program == "sltp1Mvoucher" || program == "sltp4Mvoucher"){
                    flash_sale = 100;
                }
                else if (program == "jwr100k" || program == "jwr1jt" || program == "jwr10jt" || program == "jwr100jt") {
                    if (pcs <= 10){
                        flash_sale_stage = 1000 *pcs
                        flash_sale = 1000
                    }
                    else if (pcs >=11 && pcs <= 30){
                        var total = ((pcs - 10) * 2000) + (10*1000)
                        flash_sale_stage = total
                        flash_sale = 2000
                    }
                    else {
                        var total = ((pcs - 30) * 1000) + (10*1000) + 12*1000
                        flash_sale_stage = total
                        flash_sale = 1000
                    }
                }
                else{
                    flash_sale=0
                }

            }
        }
        // non jawara
        if (paket == "yellow1") {
            var mobo = 10000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy500,flash_sale,super_attack)
    
           
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
            else{
                non_jawara(paket_jawara)
            }
        }
        
        // non jawara
        else if (paket == "yellow2") {
            var mobo = 13500;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy500,flash_sale,super_attack)
    
            
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
            else{
                non_jawara(paket_jawara)
            }
        }
        
        // non jawara
        else if (paket == "sachet1") {
            var mobo = 8900;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp0,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy0,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy0,flash_sale,super_attack)
    
            
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        // non jawara & sultan premium
        else if (paket == "sachet2") {
            var mobo = 9900;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp0,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy1000,flash_sale,super_attack)
    
            
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        // non jawara
        else if (paket == "sachet4") {
            var mobo = 14900;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc,cb_redeem_vc0,cb_rebuy1000,flash_sale,super_attack)
     
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        // non jawara & sultan premium
        else if (paket == "sachet5") {
            var mobo = 13900;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy500,flash_sale,super_attack)
    
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        // non jawara & sultan premium
        else if (paket == "sachet7") {
            var mobo = 19900;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy500,flash_sale,super_attack)
    
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        else if (paket == "fi3") {
            var mobo = 15000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk500,cb_taging1000,flash_sale,imei,super_attack,flash_sale_stage)
        
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy500,flash_sale,super_attack)

            if (program == "jwr100k") {
                hitung_jawara100k(paket_jawara)
            }
            else if (program == "jwr1jt") {
                hitung_jawara1jt(paket_jawara)
            }
            else if (program == "jwr10jt") {
                hitung_jawara10jt(paket_jawara)
            }
            else if (program == "jwr100jt") {
                hitung_jawara100jt(paket_jawara)
            }
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
        }

        else if (paket == "fi5") {
            var mobo = 25000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging1000,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy500,flash_sale,super_attack)

            if (program == "jwr100k") {
                hitung_jawara100k(paket_jawara)
            }
            else if (program == "jwr1jt") {
                hitung_jawara1jt(paket_jawara)
            }
            else if (program == "jwr10jt") {
                hitung_jawara10jt(paket_jawara)
            }
            else if (program == "jwr100jt") {
                hitung_jawara100jt(paket_jawara)
            }
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
        }

        else if (paket == "fi13") {
            var mobo = 50000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp7000,cb_top_produk0,cb_taging7000,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc300,cb_rebuy3000,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy500,flash_sale,super_attack)

            if (program == "jwr100k") {
                hitung_jawara100k(paket_jawara)
            }
            else if (program == "jwr1jt") {
                hitung_jawara1jt(paket_jawara)
            }
            else if (program == "jwr10jt") {
                hitung_jawara10jt(paket_jawara)
            }
            else if (program == "jwr100jt") {
                hitung_jawara100jt(paket_jawara)
            }
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
        }

        // non sultan premium 
        else if (paket == "fi25") {
            var mobo = 75000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp10000,cb_top_produk2500,cb_taging12000,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc500,cb_rebuy5500,flash_sale,super_attack)

            if (program == "jwr100k") {
                hitung_jawara100k(paket_jawara)
            }
            else if (program == "jwr1jt") {
                hitung_jawara1jt(paket_jawara)
            }
            else if (program == "jwr10jt") {
                hitung_jawara10jt(paket_jawara)
            }
            else if (program == "jwr100jt") {
                hitung_jawara100jt(paket_jawara)
            }
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }
        }

        // non sultan premium 
        else if (paket == "fi42") {
            var mobo = 100000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp10000,cb_top_produk0,cb_taging12000,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc500,cb_rebuy5500,flash_sale,super_attack)

            if (program == "jwr100k") {
                hitung_jawara100k(paket_jawara)
            }
            else if (program == "jwr1jt") {
                hitung_jawara1jt(paket_jawara)
            }
            else if (program == "jwr10jt") {
                hitung_jawara10jt(paket_jawara)
            }
            else if (program == "jwr100jt") {
                hitung_jawara100jt(paket_jawara)
            }
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }
        }

        // non jawara & sultan basic
        else if (paket == "fi21p") {
            var mobo = 47500;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy3000,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc300,cb_rebuy3000,flash_sale,super_attack)

            if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        // non jawara & sultan basic
        else if (paket == "fi30p") {
            var mobo = 47500;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy3000,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc300,cb_rebuy3000,flash_sale,super_attack)

            if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        // non jawara
        else if (paket == "fi10") {
            var mobo = 47500;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy3000,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc300,cb_rebuy3000,flash_sale,super_attack)

            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        // non jawara
        else if (paket == "fi26") {
            var mobo = 90000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy5500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc500,cb_rebuy5500,flash_sale,super_attack)

            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        // non jawara
        else if (paket == "fi4") {
            var mobo = 130000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy5500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc500,cb_rebuy5500,flash_sale,super_attack)

            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        // non jawara
        else if (paket == "fi15") {
            var mobo = 67500;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy5500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy3000,flash_sale,super_attack)

            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        // non jawara
        else if (paket == "fi39") {
            var mobo = 125000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy5500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy5500,flash_sale,super_attack)

            
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        // non jawara
        else if (paket == "fi63") {
            var mobo = 180000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy5500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy5500,flash_sale,super_attack)

            
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        // non jawara
        else if (paket == "fkh7") {
            var mobo = 19900;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy5500,flash_sale,super_attack)

            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        // non jawara
        else if (paket == "fkh14") {
            var mobo = 39900;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc300,cb_rebuy3000,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy5500,flash_sale,super_attack)

            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        // non jawara
        else if (paket == "fkh28") {
            var mobo = 74900;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc500,cb_rebuy5500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy5500,flash_sale,super_attack)

            
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        else if (paket == "fc6") {
            var mobo = 25000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging1000,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy500,flash_sale,super_attack)

            if (program == "jwr100k") {
                hitung_jawara100k(paket_jawara)
            }
            else if (program == "jwr1jt") {
                hitung_jawara1jt(paket_jawara)
            }
            else if (program == "jwr10jt") {
                hitung_jawara10jt(paket_jawara)
            }
            else if (program == "jwr100jt") {
                hitung_jawara100jt(paket_jawara)
            }
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
        }

        else if (paket == "fc10") {
            var mobo = 35000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging7000,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc300,cb_rebuy3000,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc300,cb_rebuy3000,flash_sale,super_attack)

            if (program == "jwr100k") {
                hitung_jawara100k(paket_jawara)
            }
            else if (program == "jwr1jt") {
                hitung_jawara1jt(paket_jawara)
            }
            else if (program == "jwr10jt") {
                hitung_jawara10jt(paket_jawara)
            }
            else if (program == "jwr100jt") {
                hitung_jawara100jt(paket_jawara)
            }
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
        }

        else if (paket == "fc20") {
            var mobo = 50000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp7000,cb_top_produk1500,cb_taging7000,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc300,cb_rebuy3000,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc500,cb_rebuy5500,flash_sale,super_attack)

            if (program == "jwr100k") {
                hitung_jawara100k(paket_jawara)
            }
            else if (program == "jwr1jt") {
                hitung_jawara1jt(paket_jawara)
            }
            else if (program == "jwr10jt") {
                hitung_jawara10jt(paket_jawara)
            }
            else if (program == "jwr100jt") {
                hitung_jawara100jt(paket_jawara)
            }
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
        }

        else if (paket == "fc30") {
            var mobo = 70000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp10000,cb_top_produk0,cb_taging12000,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc500,cb_rebuy5500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy500,flash_sale,super_attack)

            if (program == "jwr100k") {
                hitung_jawara100k(paket_jawara)
            }
            else if (program == "jwr1jt") {
                hitung_jawara1jt(paket_jawara)
            }
            else if (program == "jwr10jt") {
                hitung_jawara10jt(paket_jawara)
            }
            else if (program == "jwr100jt") {
                hitung_jawara100jt(paket_jawara)
            }
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
        }

        // non jawara
        else if (paket == "fc40") {
            var mobo = 100000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc500,cb_rebuy5500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc300,cb_rebuy3000,flash_sale,super_attack)

            
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        else if (paket == "fu1") {
            var mobo = 25000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging1000,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc300,cb_rebuy3000,flash_sale,super_attack)

            if (program == "jwr100k") {
                hitung_jawara100k(paket_jawara)
            }
            else if (program == "jwr1jt") {
                hitung_jawara1jt(paket_jawara)
            }
            else if (program == "jwr10jt") {
                hitung_jawara10jt(paket_jawara)
            }
            else if (program == "jwr100jt") {
                hitung_jawara100jt(paket_jawara)
            }
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
        }

        else if (paket == "fu2") {
            var mobo = 40000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc300,cb_rebuy3000,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc500,cb_rebuy5500,flash_sale,super_attack)

            if (program == "jwr100k") {
                hitung_jawara100k(paket_jawara)
            }
            else if (program == "jwr1jt") {
                hitung_jawara1jt(paket_jawara)
            }
            else if (program == "jwr10jt") {
                hitung_jawara10jt(paket_jawara)
            }
            else if (program == "jwr100jt") {
                hitung_jawara100jt(paket_jawara)
            }
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
        }
        
        else if (paket == "fu3") {
            var mobo = 60000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp7000,cb_top_produk1500,cb_taging7000,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc300,cb_rebuy3000,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc500,cb_rebuy5500,flash_sale,super_attack)

            if (program == "jwr100k") {
                hitung_jawara100k(paket_jawara)
            }
            else if (program == "jwr1jt") {
                hitung_jawara1jt(paket_jawara)
            }
            else if (program == "jwr10jt") {
                hitung_jawara10jt(paket_jawara)
            }
            else if (program == "jwr100jt") {
                hitung_jawara100jt(paket_jawara)
            }
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
        }

        else if (paket == "fu7") {
            var mobo = 80000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp10000,cb_top_produk2500,cb_taging12000,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc500,cb_rebuy5500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc0,cb_rebuy500,flash_sale,super_attack)

            if (program == "jwr100k") {
                hitung_jawara100k(paket_jawara)
            }
            else if (program == "jwr1jt") {
                hitung_jawara1jt(paket_jawara)
            }
            else if (program == "jwr10jt") {
                hitung_jawara10jt(paket_jawara)
            }
            else if (program == "jwr100jt") {
                hitung_jawara100jt(paket_jawara)
            }
            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
        }

        // non jawara
        else if (paket == "fu10") {
            var mobo = 100000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc500,cb_rebuy5500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc300,cb_rebuy3000,flash_sale,super_attack)

            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        // non jawara
        else if (paket == "fujb") {
            var mobo = 150000;
            var paket_jawara = new Jawara(mobo,sp2250,pcs,cb_newsp2000,cb_top_produk0,cb_taging0,flash_sale,imei,super_attack,flash_sale_stage)
            var paket_sultan_basic = new Sultan(mobo,vc500,pcs,cb_inject_vc0,cb_redeem_vc500,cb_rebuy5500,flash_sale,super_attack)
            var paket_sultan_premium = new Sultan(mobo,vc300,pcs,cb_inject_vc0,cb_redeem_vc300,cb_rebuy3000,flash_sale,super_attack)

            if (program == "sltbvoucher") {
                hitung_sultan_basic_voucher(paket_sultan_basic)
            }
            else if (program == "sltbrebuy") {
                hitung_sultan_basic_rebuy(paket_sultan_basic)
            }

            else if (program == "sltp125voucher") {
                hitung_sultan_125_voucher(paket_sultan_premium)
            }
            else if (program == "sltp1Mvoucher") {
                hitung_sultan_1M_voucher(paket_sultan_premium)
            }
            else if (program == "sltp4Mvoucher") {
                hitung_sultan_4M_voucher(paket_sultan_premium)
            }

            else if (program == "sltp125rebuy") {
                hitung_sultan_125_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp1Mrebuy") {
                hitung_sultan_1M_rebuy(paket_sultan_premium)
            }
            else if (program == "sltp4Mrebuy") {
                hitung_sultan_4M_rebuy(paket_sultan_premium)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        // non sultan & jawara 10,100 
        else if (paket == "sp16") {
            var mobo = 54000;
            var paket_jawara = new Jawara(mobo,0,pcs,cb_newsp0,cb_top_produk0,cb_taging8000,flash_sale,imei,super_attack)

            if (program == "jwr100k") {
                hitung_jawara100k(paket_jawara)
            }
            else if (program == "jwr1jt") {
                hitung_jawara1jt(paket_jawara)
            }

            else{
                non_jawara(paket_jawara)
            }
        }

        // non sultan & jawara 10,100 
        else if (paket == "sp8") {
            var mobo = 28000;
            var paket_jawara = new Jawara(mobo,0,pcs,cb_newsp0,cb_top_produk0,cb_taging2000,flash_sale,imei,super_attack)

            if (program == "jwr100k") {
                hitung_jawara100k(paket_jawara)
            }
            else if (program == "jwr1jt") {
                hitung_jawara1jt(paket_jawara)
            }
            else{
                non_jawara(paket_jawara)
            }
        }

        // non sultan & jawara 10,100 
        else if (paket == "sp2") {
            var mobo = 9000;
            var paket_jawara = new Jawara(mobo,0,pcs,cb_newsp0,cb_top_produk0,cb_taging500,flash_sale,imei,super_attack)

            if (program == "jwr100k") {
                hitung_jawara100k(paket_jawara)
            }
            else if (program == "jwr1jt") {
                hitung_jawara1jt(paket_jawara)
            }
            else{
                non_jawara(paket_jawara)
            }
        }
        
}

function detail_cb(paket_jawara){
    var pcs = parseInt(document.getElementById("pcs").value)
    document.getElementById("harga-mobo-j").innerHTML =paket_jawara.mobo;
    document.getElementById("sp").innerHTML =paket_jawara.sp;
    document.getElementById("newsp").innerHTML =paket_jawara.cb_newsp
    document.getElementById("tagging").innerHTML =paket_jawara.cb_taging
    document.getElementById("top-product").innerHTML =paket_jawara.cb_top_product
    document.getElementById("cb-flashsale").innerHTML =paket_jawara.cb_flash_sale_stage
    document.getElementById("cb-imei").innerHTML =paket_jawara.cb_imei*pcs
    document.getElementById("cb-super-attack").innerHTML =paket_jawara.cb_super_attack*pcs
    document.getElementById("total-cb").innerHTML =paket_jawara.total_cashback
}

function detail_cb_voucher(paket_sultan){
    document.getElementById("harga-mobo-s").innerHTML =paket_sultan.mobo;
    document.getElementById("vc").innerHTML =paket_sultan.vc;
    document.getElementById("inject-vc").innerHTML =paket_sultan.cb_inject_vc
    document.getElementById("reedem-vc").innerHTML =paket_sultan.cb_redeem_vc
    document.getElementById("cb-flashsale-s").innerHTML =paket_sultan.cb_flash_sale
    document.getElementById("total-cb-s").innerHTML =paket_sultan.cashback_v
}

function detail_cb_rebuy(paket_sultan){
    document.getElementById("harga-mobo-r").innerHTML =paket_sultan.mobo;
    document.getElementById("rebuy").innerHTML =paket_sultan.cb_rebuy
    document.getElementById("cb-flashsale-r").innerHTML =paket_sultan.cb_flash_sale
    document.getElementById("total-cb-r").innerHTML =paket_sultan.cashback_r
}

function non_jawara(paket_jawara){
    document.getElementById("modal").innerHTML = paket_jawara.modal();
    document.getElementById("hpp").innerHTML = Math.round(paket_jawara.hpp_non_jawara());
    document.getElementById("cuan").innerHTML =Math.round(paket_jawara.cuan_non_jawara());    
}

function hitung_jawara100k(paket_jawara){
    document.getElementById("modal").innerHTML = Math.round(paket_jawara.modal());
    document.getElementById("hpp").innerHTML = Math.round(paket_jawara.hpp_100k());
    document.getElementById("cuan").innerHTML =Math.round(paket_jawara.cuan_100k());
    detail_cb(paket_jawara)
}

function hitung_jawara1jt(paket_jawara){
    document.getElementById("modal").innerHTML = Math.round(paket_jawara.modal());
    document.getElementById("hpp").innerHTML = Math.round(paket_jawara.hpp_1jt());
    document.getElementById("cuan").innerHTML =Math.round(paket_jawara.cuan_1jt());
    detail_cb(paket_jawara)
}

function hitung_jawara10jt(paket_jawara){
    document.getElementById("modal").innerHTML = Math.round(paket_jawara.modal())
    document.getElementById("hpp").innerHTML = Math.round(paket_jawara.hpp_10jt())
    document.getElementById("cuan").innerHTML =Math.round(paket_jawara.cuan_10jt())
    detail_cb(paket_jawara)
}

function hitung_jawara100jt(paket_jawara){
    document.getElementById("modal").innerHTML = Math.round(paket_jawara.modal())
    document.getElementById("hpp").innerHTML = Math.round(paket_jawara.hpp_100jt())
    document.getElementById("cuan").innerHTML =Math.round(paket_jawara.cuan_100jt())    
    detail_cb(paket_jawara)
}

function hitung_sultan_basic_voucher(paket_sultan_basic){
    document.getElementById("modal").innerHTML = paket_sultan_basic.modal();
    document.getElementById("hpp").innerHTML = Math.round(paket_sultan_basic.hpp_basic_voucher());
    document.getElementById("cuan").innerHTML =Math.round(paket_sultan_basic.cuan_basic_voucher());
    detail_cb_voucher(paket_sultan_basic)
}

function hitung_sultan_basic_rebuy(paket_sultan_basic){
    document.getElementById("modal").innerHTML = paket_sultan_basic.modal_rebuy();
    document.getElementById("hpp").innerHTML = Math.round(paket_sultan_basic.hpp_basic_rebuy());
    document.getElementById("cuan").innerHTML =Math.round(paket_sultan_basic.cuan_basic_rebuy());  
    detail_cb_rebuy(paket_sultan_basic)    

}

function hitung_sultan_125_voucher(paket_sultan_premium){
    document.getElementById("modal").innerHTML = paket_sultan_premium.modal();
    document.getElementById("hpp").innerHTML = Math.round(paket_sultan_premium.hpp_premium125_voucher());
    document.getElementById("cuan").innerHTML =Math.round(paket_sultan_premium.cuan_premium125_voucher());
    detail_cb_voucher(paket_sultan_premium)    
}

function hitung_sultan_125_rebuy(paket_sultan_premium){
    document.getElementById("modal").innerHTML = paket_sultan_premium.modal_rebuy();
    document.getElementById("hpp").innerHTML = Math.round(paket_sultan_premium.hpp_premium125_rebuy());
    document.getElementById("cuan").innerHTML =Math.round(paket_sultan_premium.cuan_premium125_rebuy());
    detail_cb_rebuy(paket_sultan_premium)      
}

function hitung_sultan_1M_voucher(paket_sultan_premium){
    document.getElementById("modal").innerHTML = paket_sultan_premium.modal();
    document.getElementById("hpp").innerHTML = Math.round(paket_sultan_premium.hpp_premium1M_voucher());
    document.getElementById("cuan").innerHTML =Math.round(paket_sultan_premium.cuan_premium1M_voucher());  
    detail_cb_voucher(paket_sultan_premium)  
}

function hitung_sultan_1M_rebuy(paket_sultan_premium){
    document.getElementById("modal").innerHTML = paket_sultan_premium.modal_rebuy();
    document.getElementById("hpp").innerHTML = Math.round(paket_sultan_premium.hpp_premium1M_rebuy());
    document.getElementById("cuan").innerHTML =Math.round(paket_sultan_premium.cuan_premium1M_rebuy());   
    detail_cb_rebuy(paket_sultan_premium)   
}

function hitung_sultan_4M_voucher(paket_sultan_premium){
    document.getElementById("modal").innerHTML = paket_sultan_premium.modal();
    document.getElementById("hpp").innerHTML = Math.round(paket_sultan_premium.hpp_premium4M_voucher());
    document.getElementById("cuan").innerHTML =Math.round(paket_sultan_premium.cuan_premium4M_voucher());
    detail_cb_voucher(paket_sultan_premium)     
}

function hitung_sultan_4M_rebuy(paket_sultan_premium){
    document.getElementById("modal").innerHTML = paket_sultan_premium.modal_rebuy();
    document.getElementById("hpp").innerHTML = Math.round(paket_sultan_premium.hpp_premium4M_rebuy());
    document.getElementById("cuan").innerHTML =Math.round(paket_sultan_premium.cuan_premium4M_rebuy()); 
    detail_cb_rebuy(paket_sultan_premium)    
}


function resetButton() {
    document.getElementById("myForm").reset();
    document.getElementById("modal").innerHTML = " ";
    document.getElementById("hpp").innerHTML = " ";
    document.getElementById("cuan").innerHTML = " ";
    document.getElementById("detail-jawara").style.display = "none"
        document.getElementById("detail-sultan").style.display = "none"
        document.getElementById("detail-sultan-rebuy").style.display = "none"
}

function checklist1(){
  var checkBox = document.getElementById("fs-check");
  var radioCheck1 = document.getElementById("flexRadioDefault1");
  var radioCheck2 = document.getElementById("flexRadioDefault2");
  var radioCheck3 = document.getElementById("flexRadioDefault3");
  var radioCheck4 = document.getElementById("flexRadioDefault4");
  var button = document.querySelector('.button')
//   var input = document.getElementById("flash-sale");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){

    button.style.display = "block"
    // input.disabled = true;
  } else {
    button.style.display = "none";
    radioCheck1.checked = false;
    radioCheck2.checked = false;
    radioCheck3.checked = false;
    radioCheck4.checked = false;
    // input.value = "0"    
  }
}

function checklist2(){
    var checkBox = document.getElementById("imei-check");
    var input = document.getElementById("imei");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        input.style.display = "block";
        input.disabled = true;
        input.value = "5000"
      } else {
        input.style.display = "none";
        input.value = "0"
      }
}

function checklist3(){
    var checkBox = document.getElementById("sa-check");
    var input = document.getElementById("super-attack");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        input.style.display = "block";
        input.disabled = true;
        input.value = "2000"
      } else {
        input.style.display = "none";
        input.value = "0"
      }
}

function details() {
    var x = document.getElementById("detail-jawara");
    var y = document.getElementById("detail-sultan");
    var z = document.getElementById("detail-sultan-rebuy");
    var program = document.getElementById("program")
    if (program.value == "jwr100k" || program.value =="jwr1jt" || program.value =="jwr10jt" || program.value =="jwr100jt"){
        y.style.display = "none";
        z.style.display = "none";
        if (x.style.display === "none") {
            x.style.display = "";
          } else {
            x.style.display = "none";
          }
    }
    else if(program.value == "sltbvoucher" || program.value =="sltp125voucher" || program.value =="sltp1Mvoucher" || program.value =="sltp4Mvoucher"){
        x.style.display = "none";
        z.style.display = "none";
        if (y.style.display === "none") {
            y.style.display = "";
          } else {
            y.style.display = "none";
          }
    }
    else{
        x.style.display = "none";
        y.style.display = "none";
        if (z.style.display === "none") {
            z.style.display = "";
          } else {
            z.style.display = "none";
          }
    }
  }