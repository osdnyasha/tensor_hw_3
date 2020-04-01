	var userElems = document.querySelectorAll('.user'); // Данные с карточками
	var modal = document.querySelector('.modal'); // модальное окно
	var closBtn = document.querySelector('.card-info__close'); // кнопка закрытия окна

	function showModal() { // Функция открытия модального окна
		modal.style.display = 'block';
		closBtn.addEventListener( 'click', closeModal);
		modal.addEventListener( 'click',function(e) { // закрытие при нажатии вне модального окна
			if(e.target.className == modal.className) {
				closeModal();
			}
		});
	}
	function closeModal() { // функция закрытия модального окна
		modal.style.display = 'none';
		closBtn.removeEventListener('click',closeModal); // удаление обработчика
		modal.removeEventListener('click',closeModal);

	}
	function setDataModal(name,bday,phone,online,photo) { // Заносим информацию в модальное окно
		document.querySelector('.card-info__online').innerHTML = online;
		document.querySelector('.card-info__bday_value').innerHTML = bday;
		document.querySelector('.card-info__title').innerHTML = name;
		document.querySelector('.card-info__phone_value').innerHTML = phone;
		document.querySelector('.card-info__img').src = photo;
		showModal();
	} 

	function getData() { // получение информации о текущей карточке
		let name = this.dataset.name;
		let bday = this.dataset.bday;
		let phone = this.dataset.phone;
		let online = this.dataset.online;
		let photo = this.dataset.photo;
		setDataModal(name,bday,phone,online,photo);
	}

	document.addEventListener('DOMContentLoaded', () => { // Dom загружен
		for(var i = 0; i < userElems.length; i++) {
			userElems[i].addEventListener( 'click', getData); // на каждую карточку вешаю обработчик
		}
	});
