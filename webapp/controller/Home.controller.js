sap.ui.define(
  ["sap/ui/core/mvc/Controller", "../model/formatter", "sap/m/MessageToast"],
  function (Controller, formatter, MessageToast) {
    "use strict";

    return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {
      formatter: formatter,

      onInit: function () {},

      handleDateChange: function (oEvent) {
        MessageToast.show(
          "valid:" +
            oEvent.getParameter("valid") +
            "\n" +
            this.getView().getModel().getProperty("/date")
        );
      },
    });
  }
);
