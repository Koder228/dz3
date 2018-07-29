window.addEventListener('DOMContentLoaded', function(){
// получаем информацию для работы
	let products = document.querySelectorAll('.product'),
		buttons = document.getElementsByTagName("button"),
		open = document.getElementsByClassName("open")[0];
//создание продукт кнопки продукта и кнопки корзины с функциями 

//Ниже создание корзины
		function createCart(){

			let cart = document.createElement("div"),
//блок корзины
				field = document.createElement('div'),
//Блок где Хранятся товары
				heading = document.createElement('h2'),
// заголовок
				close = document.createElement("button");

// Добавили класс элементам
				cart.classList.add("cart");
				field.classList.add("cart-field");
				close.classList.add("close");
// Добавили текстэелементам
				close.textContent = "Закрыть";
				heading.textContent = "В нашей корзине : ";
// Добавление в бади корзины и добавление в корзину элементы
				document.body.appendChild(cart);
				cart.appendChild(heading);
				cart.appendChild(field);
				cart.appendChild(close);
		}

		createCart();


		let field = document.querySelector(".cart-field"),
			close = document.querySelector(".close"),
			cart = document.querySelector(".cart");

			// Вещаем  обработчик события клика на каждую кнопку
		for(let i = 0 ; i < buttons.length; i++){

			buttons[i].addEventListener('click' , function(){
				//Создание копии карточки с товаром
				let item = products[i].cloneNode(true),
					btn = item.querySelector('button');

	//			btn.remove();
				field.appendChild(item);
				products[i].remove();
			})


		}

		function openCart(){
			cart.style.display = "block";
		};
		function closeCart(){
			cart.style.display = "none";
		};

		open.addEventListener('click', openCart);
		close.addEventListener('click', closeCart);



//DZ




});