import template from './modal-template.html';
import confirmTemplate from './confirm-template.html';

class ModalController {

  constructor(MainService, CardListService) {
    this.MainService = MainService;
    this.CardListService = CardListService;
  }

  $onInit() {
    this.cardname = '';
    this.error = false;
  }

  checkTitle() {
    if (this.cardname.length === 0 || this.cardname === null) {
      this.cardname = 'Default title';
    }
    for (let variable of this.MainService.cardlists) {
      for (let key of variable.cardlist) {
        if (_.includes(key, this.cardname) && this.cardname != 'Default title') {
          this.error = true;
          return;
        }
      }
    }

    this.$close(this.cardname);
  }

  cancel() {
    this.$dismiss();
  }

  ok() {
    this.$close();
  }
}

export default class CardListController {

  constructor(MainService, $uibModal, CardListService) {
    this.MainService = MainService;
    this.$uibModal = $uibModal;
    this.CardListService = CardListService;
    this.cardlist = [];
  }

  $onInit() {
    console.log(this);
    this.CardListService.getCards(this.id)
      .success(result => {
        for (let variable of result) {
          this.cardlist.push(variable);
        }
      })
      .error(result => {
        console.log('Error in GET cards');
      });
  }

// modal for add new title

  addCard() {
    const modal = this.$uibModal.open({
      animation: true,
      template: template,
      controller: ModalController,
      controllerAs: '$modalCtrl',
      bindToController: true,
    });

    modal.result.then(title => {
      const data = {
        title: title,
        todos: [],
        class: 'default',
        cardlist_id: this.id
      };
      this.CardListService.addCard(data)
        .success(result => {
          this.cardlist.push(result);
        })
        .error( result => {
          console.log('error in POST card');
        });
    });
  }

// confirm for remove row

  confirm() {
    const confirmModal = this.$uibModal.open({
      animation: true,
      template: confirmTemplate,
      controller: ModalController,
      controllerAs: '$modalCtrl',
      bindToController: true,
    });

    confirmModal.result.then( () => {
      this.MainController.removeRow(this.id);
    }, () => {
      return false;
    });
  }

// remove card

  removeCard(id) {
    this.CardListService.removeCard(id)
      .success( result => {
        _.pullAllBy(this.cardlist, [{ 'id': result }], 'id');
      })
      .error( result => {
        console.log('error in DELETE card');
      });
  }

// remove row

  removeRow() {
    this.confirm();
  }
}
