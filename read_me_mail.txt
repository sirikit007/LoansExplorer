Создать webserver:

Go to Apache - https://www.apachelounge.com/download/ - скачиваем последнюю версию for windows и сохраняем на диск С.
httpd.exe - запустить
localhost:80 - запустить для проверки работы сервера (httpd.exe);

Внутри httpd.conf найти documentRoot and Directory и вставить путь к нашему вебсайту (заменить слэши, если не правильные).
Должно выглядеть так:
DocumentRoot "c:/!HTML/!My Work/LoansExplorerBootstrap1"
<Directory "c:/!HTML/!My Work/LoansExplorerBootstrap1">



Подключить PHP to Apache;

скачать php (если нет);
Если в httpd.cong нет про php.module, то дописать самим:
Load Module php_module "C/.../php/php8apache2_4.dll";

Еще следует добавить 
<FilesMatch \.php$>
    SetHandler application/x-httpd-php
</FilesMatch>, если нет.
Также найти PHPIniDir и если нету, то дописать:	PHPIniDir "C:\php"

Все примерно должно выглядеть так:
LoadModule php_module "C:/php/php8apache2_4.dll"
PHPIniDir "C:\php"
<FilesMatch \.php$>
    SetHandler application/x-httpd-php
</FilesMatch>
AddType application/x-httpd-php .php

Перезапустить httpd.exe и проверить, что все работает;

В VScode сделать проверку:
Создать  php_info.php и внутри вставить код: <?php phpinfo();?>  и чтобы его открыть прописать localhost/php_info.php. Убедиться, что работает


Настройка hmailserver.com

Открыть файл php.ini from php fold. Если нет файла, то скопировать php.ini development и переименовать его в php.ini. Внутри php.ini раскомментировать sendmail_from=  и написать мэйл, который мы создали в hmailserver.com
Должно быть так:
sendmail_from = svetik@moroz.home

Убедиться, что порты, прописанные в hmailserver и php.ini совпадают. Например, smtp_port = 25 (php.ini)

Restart Apache




Code of mail for php:

<?php
	

	$to_email = "alex.moroz.aus@gmail.com";
	$subject = "Simple Email Test via PHP";
	$body = "Hi, This is a test email sent from PHP script";
	$headers = "From: alex.moroz.aus@gmail.com";

	if (mail($to_email, $subject, $body, $headers)) {
		header("Location: sendMessage.html");
	} else {
		echo "Email sending failed...";
	}

?>

Form of mail for html:
			
			<form id="contact-form" action="contact-form.php" method="post">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input name="name" type="text" placeholder="Your Name" class="form-control mt-3" required>
                                    </div>                               
                                </div><br>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input type="text" type="text" placeholder="Your Surname" class="form-control mt-3"  >
                                    </div>                               
                                </div><br>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input name="email" type="email" placeholder="Your Email" class="form-control mt-3" required>
                                    </div>                               
                                </div>
                                
                                <div class="col-12 justify-content-center text-center buttonForContactForm">
                                    <textarea name="message" placeholder="Text us" class="form-control mt-3" id="" cols="30" rows="10"></textarea>
                                    <button id="openNewTab" type="submit" class="form-control submit cta-btn mt-3">Send Message</button>
                                </div>
                                                           
                            </div>
                        </form>


To open a mobile device:

ipconfig - find out your IP address
open Apache24 - bin - httpd.exe
launch a website in localhost

