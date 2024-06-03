import { LitElement, html, css } from "lit";
import "../../components/card/card.js";
import "../../components/buttonCard/buttonCard.js";
import "../../components/modal/modal.js";

export class JsPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      background-color: #171718;
      padding: 1rem 0;
    }

    .container {
      max-width: 1200px;
      width: 90%;
      margin: 0 auto;
    }

    h1,
    p {
      margin: 0;
      color: white;
    }
    h1 {
      color: #47d16e;
      margin-bottom: 0.5rem;
    }

    .pagination-buttons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
    }

    .pagination-buttons {
      margin: 1rem 0;
      display: flex;
      justify-content: space-between;
    }
  `;

  static get properties() {
    return {
      ejercicios: { type: Array },
      page: { type: Number },
      numPage: { type: Number },
      isModalOpen: { type: Boolean },
      selectedEjercice: { type: Object },
    };
  }

  constructor() {
    super();

    this.ejercicios = [
      {
        title: "Create Hello World Function",
        description:
          'Write a function createHelloWorld. It should return a new function that always returns "Hello World". ',
        type: `return function(...args) {
          return "Hello World";
      }`,
      },
      {
        title: "Counter",
        description:"Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).",
        type:`var createCounter = function(n) {
          let current = n;
          return function() {
              return current++;
          };
      };`
      },
      {
        title: "To Be Or Not To Be",
        description:
          "Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions",
          type:`var expect = function(val) {
            return {
                toBe: function(expected) {
                    if (val === expected) {
                        return true;
                    } else {
                        throw new Error("Not Equal");
                    }
                },
                notToBe: function(expected) {
                    if (val !== expected) {
                        return true;
                    } else {
                        throw new Error("Equal");
                    }
                }
            };
        };`
      },
      {
        title: "Counter II",
        description:
          "Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.",
          type:`var createCounter = function(init) {
            let current = init;
            return {
                increment: function() {
                    return ++current;
                },
                decrement: function() {
                    return --current;
                },
                reset: function() {
                    current = init;
                    return current;
                }
            };
        };`
      },
      {
        title: "Apply Transform Over Each Element in Array",
        description:
          "Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.",
          type:`
          var map = function(arr, fn) {
            const newArray = [];
           for (let i = 0; i < arr.length; i++) {
               newArray.push(fn(arr[i], i));
           }
           return newArray;
       };`
      },
      {
        title: "Filter Elements from Array",
        description:
          "Given an integer array arr and a filtering function fn, return a filtered array filteredArr.",
          type:`
          var filter = function(arr, fn) {
            const result = [];
           for (let i = 0; i < arr.length; i++) {
               if (fn(arr[i], i)) {
                   result.push(arr[i]);
               }
           }
           return result;
       };
          
          `
      },
      {
        title: "Array Reduce Transformatio",
        description:"Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding",
        type:`var reduce = function(nums, fn, init) {
          let val = init;
         for (let i = 0; i < nums.length; i++) {
             val = fn(val, nums[i]);
         }
         return (val);
          
     };`
      },
      {
        title: "Function Compositio",
        description:
          "Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.",
          type:`var compose = function(functions) {
    
            return function(x) {
                for (let i = functions.length - 1; i >= 0; i--) {
                    x = functions[i](x);
                }
                return x;
            }
        };`
      },
      {
        title: "Return Length of Arguments Passed",
        type:`var argumentsLength = function(...args) {
          return args.length;
      };`,
        description:
          "Write a function argumentsLength that returns the count of arguments passed to it.",
      },
      {
        title: "Allow One Function Call",
        type:`var once = function(fn) {
          let bandera = false;
          return function(...args){
               if (!bandera) {
                  const res = fn(...args);
                  bandera = true;
                  return res;
              } else {
                  return undefined;
              }
          }
      };`,
        description:
          "Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.",
      },
      {
        title: "Memoize",
        type:`function memoize(fn) {
    
          const cache = {}; 
          
          return function(...args) {
              const unico = JSON.stringify(args); 
              
            if (cache[unico] === undefined) { 
                  cache[unico] = fn(...args); 
              }
              
              return cache[unico]
          };
      }`,
        description:
          "A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.",
      },
      {
        title: "Add Two Promises",
        type:`var addTwoPromises = async function(promise1, promise2) {
          const [result1,result2]= await Promise.all([promise1,promise2]);
      
          return result1+result2;
      };`,
        description:
          "Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers. ",
      },
      {
        title: "Sleep",
        type:`async function sleep(millis) {
          return new Promise(resolve=>setTimeout(resolve,millis))
      }`,
        description:
          "Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.",
      },
      {
        title: "Timeout Cancellation",
        type:`var cancellable = function(fn, args, t) {
          let detener = false;
          const cancelFn = () => {
              detener = true; 
          };
          setTimeout(() => {
              if (!detener) {
                  const result = fn(...args); 
                  console.log({"time": t, "returned": result}); 
              }
          }, t);
          
          return cancelFn; 
      };`,
        description:
          "Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn",
      },
      {
        title: "Promise Time Limit",
          type:`var timeLimit = function(fn, t) {
            return async function(...args) {  
                const timeoutPromise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        reject("Time Limit Exceeded");
                    }, t);
                });  
                const fnPromise = fn(...args); 
                return Promise.race([fnPromise, timeoutPromise]);
            }
        };`,
        description:
          "Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function..",
      },
      {
        title: "Debounce",
          type:`var debounce = function(fn, t) {
            let timeOutId;
            return function(...args) {
              clearTimeout(timeOutId);
                timeOutId = setTimeout(() => {
                    fn.apply(this, args);
                }, t);
            }
        };`,
        description:
          "Given a function fn and a time in milliseconds t, return a debounced version of that function.",
      },
      {
        title: "Execute Asynchronous Functions in Parallel",
          type:`var promiseAll = function(functions) {

            return new Promise((resolve,reject)=>{
                let results=[];
                let completed=0;
                functions.forEach(async (func, index)=>{
               try{
                    let result=await func();
                    results[index]=result;
                    completed++;
        
                    if(completed===functions.length){
                        resolve(results);
                    }
               }catch(error){
                 reject(error)
               }
        
            })
            } )
        };`,
        description:
          "Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.",
      },
      {
        title: "Array Prototype Last",
          type:`Array.prototype.last = function() {
            return (this.length === 0) ? -1 : this[this.length - 1]
        };`,
        description:
          "Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.",
      },
      {
        title: "Group By",
          type:`Array.prototype.groupBy = function(fn) {
            return this.reduce((grouped, item) => {
              const key = fn(item);
              if (!grouped.hasOwnProperty(key)) {
                grouped[key] = [];
              }
              grouped[key].push(item);
              return grouped;
            }, {});  
          }`,
        description:
          "Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.",
      },
      {
        title: "Sort By",
          type:`var sortBy = function(arr, fn) {
            return arr.sort((a, b) => fn(a) - fn(b));
       };`,
        description:
          "Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.",
      },
      {
        title: "Join Two Arrays by ID",
          type:`var join = function(arr1, arr2) {
            let objs = {};
            arr1.forEach(obj => {
                objs[obj.id] = { ...obj };
            });
            arr2.forEach(obj => {
                objs[obj.id] = { ...objs[obj.id], ...obj };
            });
            return Object.values(objs).sort((a, b) => a.id - b.id);
        };`,
        description:
          "Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. ",
      },
      {
        title: "Flatten Deeply Nested Array",
          type:`var flat = function (arr, n) {
            if (n === 0) return arr; 
            let result = [];
            let valores = arr.map(item => ({ item, depth: 0 }));
            while (valores.length > 0) {
                const { item, depth } = valores.pop();
                if (Array.isArray(item) && depth < n) {
                    valores.push(...item.map(subItem => ({ item: subItem, depth: depth + 1 })));
                } else {
                    result.push(item);
                }
            }
            return result.reverse();   
        };`,
        description:
          "Given a multi-dimensional array arr and a depth n, return a flattened version of that array.",
      },
      {
        title: "Compact Object",
          type:`var compactObject = function(obj) {
            if (Array.isArray(obj)) {
                return obj.filter(Boolean).map(compactObject);
             } else if (typeof obj === 'object' && obj !== null) {
                  return Object.fromEntries(Object.entries(obj).filter(([, value]) => Boolean(value)).map(([key, value]) => [key, compactObject(value)]));
             } else {
                 return obj;
             }
         };`,
        description: "Given an object or array obj, return a compact object.",
      },
      {
        title: "Event Emitter",
          type:`subscribe(eventName, callback) {
            if(!this.events[eventName])  this.events[eventName]=[];
            this.events[eventName].push(callback);
            return {
                unsubscribe: () => {
                  this.events[eventName]=this.events[eventName].filter(cv=>cv!==callback);  
                }
            };
        }
        `,
        description:
          "Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.",
      },
      {
        title: "Array Wrapper",
          type:`ArrayWrapper.prototype.valueOf = function() {
            return this.nums.reduce((acc, num) => acc + num, 0);
        };
        `,
        description:
          "Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:",
      },
      {
        title: "Calculator with Method Chaining",
          type:`class Calculator {
    
            /** 
             * @param {number} value
             */
            constructor(value) {
                this.result=value;
            }
            
            /** 
             * @param {number} value
             * @return {Calculator}
             */
            add(value){
                this.result+=value;
                return this;
            }
            
            /** 
             * @param {number} value
             * @return {Calculator}
             */
            subtract(value){
                this.result-=value;
                return this;
            }
            
            /** 
             * @param {number} value
             * @return {Calculator}
             */  
            multiply(value) {
                this.result*=value;
                return this;
            }
            
            /** 
             * @param {number} value
             * @return {Calculator}
             */
            divide(value) {
                if (value === 0) {
                     throw new Error("Division by zero is not allowed");
                } 
                this.result/=value;
                return this;
            }
            
            /** 
             * @param {number} value
             * @return {Calculator}
             */
            power(value) {
                this.result=Math.pow(this.result,value);
                return this;
            }
            
            /** 
             * @return {number}
             */
            getResult() {
                return this.result;
            }`,
        description:
          "Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.",
      },
    ];
    this.page = 0;
    this.numPage = 10;
    this.isModalOpen = false;
    this.selectedEjercice = null;
  }

  get paginatedItems() {
    const inicio = this.page * this.numPage;
    const final = inicio + this.numPage;
    return this.ejercicios.slice(inicio, final);
  }

  nextPage() {
    if ((this.page + 1) * this.numPage < this.ejercicios.length) {
      this.page += 1;
    }
  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 1;
    }
  }

  openModal(ejercice) {
    this.selectedEjercice = ejercice;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedEjercice = null;
  }

  render() {
    return html`
      <div class="container">
        <h1>Ejercicios de JavaScript</h1>
        <div class="pagination-buttons">
          <button-card-components
            @click="${this.nextPage}"
            icon="${"Siguiente"}"
          ></button-card-components>
          <button-card-components
            @click="${this.prevPage}"
            icon="${"Anterior"}"
          ></button-card-components>
        </div>
        <card-components
          .items="${this.paginatedItems}"
          .renderItem="${(item) => html`
            <div class="exercise-card" @click="${() => this.openModal(item)}">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
          `}"
        ></card-components>
      </div>

      <modal-page
        type="code"
        .content="${this.selectedEjercice}"
        .open="${this.isModalOpen}"
        @close-modal="${this.closeModal}"
      ></modal-page>
    `;
  }
}

customElements.define("js-page", JsPage);
