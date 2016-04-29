import template from './modal-template.html';

class ModalController {

}

export default class MainController {

  constructor(MainService, $uibModal) {
    this.MainService = MainService;
    this.$uibModal = $uibModal;
  }

  $onInit() {
    this.cardlists = [];
    console.log(this.$uibModal);
    // this.$uibModal = $uibModal;
    // console.log(this.$uibModal);
  }

  open() {
    this.$uibModal.open({
      animation: this.animationsEnabled,
      template,
      controller: ModalController,
    });
  }

  addRow() {
    // this.open();
    // let cardname = prompt('Enter the name of the card', 'Your title');
    // if (cardname === null) return;
    // for (let variable of this.cardlists) {
    //   for (let key of variable.cards) {
    //     if (cardname.length > 20) {
    //       alert('The name is too large, use less symbol');
    //       return;
    //     }
    //     if (_.includes(key, cardname) && cardname != 'Default title') {
    //       alert('Card with that name already exist');
    //       return;
    //     }
    //   }
    // }
    // if (cardname === '' || cardname === defCardname) {
    //   this.MainService.count++;
    // }
    // this.cardlists.push({cards: [{title: cardname || 'Default title ' + this.MainService.count, todos: [], class: 'default', total: 0}]});
    // this.MainService.push(cardname);
  }

  deleteRow(index) {
    this.cardlists.splice(index, 1);
  }
}
