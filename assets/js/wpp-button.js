var url =
  "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?72034";
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
s.src = url;
var options = {
  enabled: true,
  chatButtonSetting: {
    backgroundColor: "#00e785",
    ctaText: "Fale conosco!",
    borderRadius: "25",
    marginLeft: "0",
    marginRight: "20",
    marginBottom: "20",
    ctaIconWATI: false,
    position: "right",
  },
  brandSetting: {
    brandName: "Saulo ",
    brandSubTitle: "undefined",
    brandImg: "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
    welcomeText: "Olá, como podemos te ajudar ?",
    messageText: "Olá, quero saber mais sobre o Reciclador Digital!",
    backgroundColor: "#00e785",
    ctaText: "Fale conosco!",
    borderRadius: "25",
    autoShow: false,
    phoneNumber: "31972508886",
  },
};
s.onload = function () {
  CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName("script")[0];
x.parentNode.insertBefore(s, x);
