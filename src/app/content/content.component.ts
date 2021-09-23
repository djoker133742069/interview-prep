import { Component, Input, OnInit } from '@angular/core';

interface it{
  link: string;
  name?: string;
}
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {
  @Input() topic: string = 'Arrays';
  constructor() { }

  ngOnInit(): void {
    console.log(this.questionList)
  }
  questionList: Record<string, it[]> = {
    'Arrays': [
      {
        link : "https://leetcode.com/problems/product-of-array-except-self/",
        name :  "Product of Array Except Self" 
      },
      {
        link : "https://leetcode.com/problems/longest-turbulent-subarray/",
        name : "Longest Turbulent Array"
      },
      {
        link : "https://leetcode.com/problems/largest-number/",
        name : "Largest Number"
      },
      {
        link : "https://leetcode.com/problems/move-zeroes/",
        name : "Move Zeroes"
      },
      {
        link : "https://leetcode.com/problems/next-permutation/",
        name : "Next Permutation"
      },
      {
        link : "https://leetcode.com/problems/first-missing-positive/",
        name : "First Missing Positive"
      },
      {
        link : "https://practice.geeksforgeeks.org/problems/inversion-of-array/0",
        name : "Inversion of Array"
      },
      {
        link : "https://practice.geeksforgeeks.org/problems/a-difference-of-values-and-indexes/0",
        name : "A difference of Values and Indexes"
      },
      {
        link :"https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/",
        name : "Decrease Elements to make Array Zigzag"
      },
      {
        link : "https://practice.geeksforgeeks.org/problems/ease-the-array/0",
        name : "Ease the Array"
      },
      {
        link :"https://practice.geeksforgeeks.org/problems/max-sum-in-the-configuration/1",
        name : "Max Sum in the Configuration"
      },
      {
        link : "https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0",
        name : "Minimum Number of Jumps"
      },
      {
        link : "https://leetcode.com/problems/maximum-subarray/",
        name : "Maximum Subarray" 
      },
      {
        link : "https://leetcode.com/problems/maximum-product-subarray/",
        name : "Maximum Product Subarray"
      },
      {
        link : "https://practice.geeksforgeeks.org/problems/palindromic-array/0",
        name : "Palindromic Array"
      },
    ],
    'Strings': [
      {
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        name: "Longest Substring Without Repeating Characters"
      }
    ]
  }; 
}
