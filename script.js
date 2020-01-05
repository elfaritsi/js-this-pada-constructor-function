function DataAngkot(NoAngkot, Trayek, Penumpang, Kas){

	this.NoAngkot = NoAngkot;
	this.Trayek = Trayek;
	this.Penumpang = Penumpang;
	this.Kas = Kas;

	this.penumpangNaik = function(NamaPenumpang){
		for(var i = 0; i<= this.Penumpang.length; i++){

			//jika angkot masih kosong isi bangku pertama
			if(this.Penumpang.length == 0){
				this.Penumpang.push(NamaPenumpang);
				return this.Penumpang;
			}
			//jika ada nama penumpang sama dengan yg sudah ada di angkot maka munculkan pesan
			else if(this.Penumpang[i] == NamaPenumpang){
				console.log(NamaPenumpang + ' Sudah Ada Di dalam angkot');
				return Penumpang;
			}
			/* jika ada bangku kosong setelah ada penumpang yg turun, maka penumpang yg naik akan duduk
			di bangku yg kosong */
			else if(this.Penumpang[i] == undefined){
				Penumpang[i] = NamaPenumpang;
				return this.Penumpang;
			}
			

		}

	}

	this.penumpangTurun = function(NamaPenumpang, Bayar){

		if(this.Penumpang.length === 0){
			alert('penumpang Masih Kosong');
			return false;
		}

		for(var i = 0; i <= this.Penumpang.length; i++){

			//menurunkan penumpang dengan nama yg diinput oleh user
			if(NamaPenumpang == this.Penumpang[i]){
				this.Penumpang[i] = undefined;
				this.Kas += Bayar;
				return this.Penumpang;
		
		//Jika nama penumpang tidak ada maka akan muncul pesan
			}else if(i == this.Penumpang.length){
				alert('tidak Ada');
			}
			
		}
	}
}


var angkot1 = new DataAngkot('01', ['Pakam', 'Medan'], [], 0);
