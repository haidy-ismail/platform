import { Component } from '@angular/core';

@Component({
  selector: 'app-reason-transfer',
  templateUrl: './reason-transfer.component.html',
  styleUrls: ['./reason-transfer.component.css']
})
export class ReasonTransferComponent {

  cards = [
    { number: '1', label: 'سبب التحويل', content: 'طلاب مشاغبين', date: '' , activeButton: '' ,  isMenuOpen: false},
    { number: '2', label: 'سبب التحويل', content: 'طلاب مشاغبين', date: '' , activeButton: '' ,  isMenuOpen: false},
    { number: '3', label: 'سبب التحويل', content: 'طلاب مشاغبين', date: '' , activeButton: '' ,  isMenuOpen: false},
    { number: '4', label: 'سبب التحويل', content: 'طلاب مشاغبين', date: '' , activeButton: '' ,  isMenuOpen: false},
    // Add more card objects as needed
  ];

  onButtonClick(card: any, buttonType: string) {
    card.activeButton = buttonType; // Set the active button for each card individually
    console.log(`Button ${buttonType} clicked for card ${card.number}`);
    // Add any additional logic, like opening a modal or sending data
  }

  
  toggleMenu(card: any): void {
    card.isMenuOpen = !card.isMenuOpen; // Toggle the `isMenuOpen` flag
  }

  // Method to handle menu actions (Delete, Edit, Download)
  menuAction(action: string): void {
    console.log(`Action: ${action}`);
    // Add custom logic for each action here (e.g., opening modals, handling downloads, etc.)
  }

}
