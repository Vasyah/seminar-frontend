import { IUser } from '../types';

export const getTemplate = (
  { name, status }: IUser,
  coordinator: string,
  paymentAttention: string,
  paymentType: string,
  isTeacher: boolean,
  price: number,
) =>
  `<table cellpadding='0' class='cf An' id='undefined'><tbody><tr><td class='Ap'><div id=':a8' class='Ar Au' style='display:block'><div id=':ac' class='Am Al editable LW-avf tS-tW' hidefocus='true' aria-label='Текст письма' tabindex='1' itacorner='6,7:1,1,0,0' spellcheck='false' style='direction:ltr;min-height:660px'><u></u><div style="width:100%;font-family:arial,'helvetica neue',helvetica,sans-serif;padding:0;Margin:0"><div style='background-color:#fafafa'><table width='100%' cellspacing='0' cellpadding='0' style='border-collapse:collapse;border-spacing:0;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#fafafa'><tbody><tr height='0'><td style='padding:0;Margin:0'><table cellpadding='0' cellspacing='0' border='0' align='center' style='border-collapse:collapse;border-spacing:0;width:600px'><tbody><tr><td cellpadding='0' cellspacing='0' border='0' height='0' style='padding:0;Margin:0;line-height:1px;min-width:600px'><img src='https://ci3.googleusercontent.com/proxy/mEwrBLRqRs4U3ih0k5bwvexxwbixRuiyxCpDdvF5a6Gs8XIJMxed2-RgcT-zgcGjse9m9272dPTp9X6kSFXHCyMJNFtQN6eivXkDbCfNPHk=s0-d-e1-ft#https://esputnik.com/repository/applications/images/blank.gif' width='600' height='1' style='display:block;border:0;outline:0;text-decoration:none;max-height:0;min-height:0;min-width:600px;width:600px' alt=''></td></tr></tbody></table></td></tr><tr><td valign='top' style='padding:0;Margin:0'><table cellpadding='0' cellspacing='0' class='m_-2411825240332159112es-content' align='center' style='border-collapse:collapse;border-spacing:0;table-layout:fixed!important;width:100%'><tbody><tr><td align='center' style='padding:0;Margin:0'><table bgcolor='#ffffff' class='m_-2411825240332159112es-content-body' align='center' cellpadding='0' cellspacing='0' style='border-collapse:collapse;border-spacing:0;background-color:#fff;width:600px'><tbody><tr><td align='left' style='Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px'><table cellpadding='0' cellspacing='0' width='100%' style='border-collapse:collapse;border-spacing:0'><tbody><tr><td align='center' valign='top' style='padding:0;Margin:0;width:560px'><table cellpadding='0' cellspacing='0' width='100%' role='presentation' style='border-collapse:collapse;border-spacing:0'><tbody><tr><td align='center' class='m_-2411825240332159112es-m-txt-c' style='padding:0;Margin:0;padding-bottom:0'><h2 style="Margin:0;line-height:46px;font-family:arial,'helvetica neue',helvetica,sans-serif;font-size:32px;font-style:normal;font-weight:700;color:#333">21-23 Апреля 2023</h2></td></tr><tr><td align='center' class='m_-2411825240332159112es-m-txt-c' style='padding:0;Margin:0;padding-bottom:10px'><h3 style="Margin:0;line-height:46px;font-family:arial,'helvetica neue',helvetica,sans-serif;font-size:40px;font-style:normal;font-weight:700;color:#333">Семинар</h3></td></tr><tr><td style='padding:0;Margin:0'><h3 align='center' style="Margin:0;line-height:24px;font-family:arial,'helvetica neue',helvetica,sans-serif;font-size:20px;font-style:normal;font-weight:700;color:#333">Здравствуйте, <i>${name}</i></h3></td></tr><tr><td align='left' class='m_-2411825240332159112es-m-p0r m_-2411825240332159112es-m-p0l' style='Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px'><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:14px"></p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:17px">Поздравляем Вас с успешной регистрацией на международный Семинар центра духовного развития Кузьминой Ларисы Алексеевны!</p><br><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:17px">Тема семинара:<b>«Мир Человека в Любви Господа»!</b></p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:17px"><br></p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:17px">Ваш координатор по сбору денежных средств - ${coordinator}</p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:14px"><br></p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:17px">${paymentAttention}</p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:17px">${paymentType}</p><br><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:17px"><b>Стоимость участия в семинаре:<span style='color:red'> ${price} рублей.</span></b></p><br><br><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:17px">Просим Вас, в ответном письме, прислать под
тверждение об оплате.<br>Подтверждением оплаты является чек или квитанция.<br>Возврат денежных средств, за участие в семинаре, после оплаты – не предусмотрен.<br>По вопросам организации<br><b>Ольга: <a href='tel:+79099768767'>89099768767</a>&nbsp;<a href={"https://t.me/olyaolyaru"} target={'_blank'}>@olyaolyaru</a></b><br>Администратор канала<br><b>Ксения: <a href='tel:+79161515263'>89161515263</a>&nbsp;<a href={"https://t.me/kseniadobraya"} target={'_blank'}>@kseniadobraya</a></b><br/>Техническая поддержка<br><b>Василий: <a href='tel:+79133712749'>89133712749</a>&nbsp;<a href={"https://t.me/vasyahG"} target={'_blank'}>@vasyahG</a></b></p><br><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:17px"><b><u>Важно:</u></b></p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:17px">При переводе денежных средств на карту, в назначении платежа указать «Дарение», «Подарок» или «К празднику». Такой перевод не будет облагаться НДФЛ, согласно ст. 217 НК РФ.</p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:14px"><br></p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:14px"><br></p></td></tr><tr><td align='center' style='padding:0;Margin:0;padding-top:10px;padding-bottom:10px'><span class='m_-2411825240332159112es-button-border' style='border-style:solid;border-color:#2cb543;background:#5c68e2;border-width:0;display:inline-block;border-radius:6px;width:auto'><a href='https://docs.google.com/document/d/101ZSdc89qkvMlpjy3QIEv5hQsXB-uCzBjYXxaJALJHc/edit?usp=sharing' target='_blank' class='m_-2411825240332159112es-button' style="text-decoration:none;color:#fff;font-size:14px;border-style:solid;border-color:#5c68e2;border-width:10px 30px 10px 30px;display:inline-block;background:#5c68e2;border-radius:6px;font-family:arial,'helvetica neue',helvetica,sans-serif;font-weight:400;font-style:normal;line-height:14px;width:auto;text-align:center;border-left-width:30px;border-right-width:30px">Инструкция по оплате Сбербанк</a></span></td></tr><tr><td align='center' style='padding:0;Margin:0;padding-top:10px;padding-bottom:10px'><span class='m_-2411825240332159112es-button-border' style='border-style:solid;border-color:#2cb543;background:#5c68e2;border-width:0;display:inline-block;border-radius:6px;width:auto'><a href='https://docs.google.com/document/d/1pYzhEaTNL9fGV79-bPA-xPYDgJtbQEv5wYJmCyzSkk4/edit?usp=sharing' target='_blank' class='m_-2411825240332159112es-button' style="text-decoration:none;color:#fff;font-size:14px;border-style:solid;border-color:#5c68e2;border-width:10px 30px 10px 30px;display:inline-block;background:#5c68e2;border-radius:6px;font-family:arial,'helvetica neue',helvetica,sans-serif;font-weight:400;font-style:normal;line-height:14px;width:auto;text-align:center;border-left-width:30px;border-right-width:30px">Инструкция по оплате Тинькофф</a></span></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div></div></div></div></td></tr></tbody></table>`;
