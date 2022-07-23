(()=>{const e=document.querySelector(".projects"),t=[{title:"Crasio Calculator",image:"./img/crasioCalculator.png",text:"Crasio calculator is a simple web calculator that implements a simple calculator that respects order of operations (PEDMAS). It was initially an exersize of The Odin Project, which did not expect order of operations to be respected, that I went further with."},{title:"Budget Keeper",image:"./img/checkers.png",text:"I was sick of all the bloated budgeting software I had tried so I decided to make my own. You enter what you spend and receive, and it keeps track. Implemented in Java, using an <em>sqlite3</em> database and <em>JavaFX</em> GUI"},{title:"Checkers",image:"./img/budgetKeeper-windowYear.png",text:"The first complex (?) program I ever made. Locally played 2-player Checkers. Enforces all rules. Implemented in Java, with a <em>Swing</em> GUI."}];function a(e,t){let a=document.createElement("div");a.classList.add("card");let i=document.createElement("div");i.classList.add("card-title"),i.textContent=e.title;let l=document.createElement("div");l.classList.add("card-img"),l.style.backgroundImage=`url('${e.image}')`;let d=document.createElement("div");d.classList.add("card-text"),d.innerHTML=e.text,a.appendChild(i),a.appendChild(l),a.appendChild(d),console.log(a.children),t.appendChild(a)}!function(){for(let i of t)a(i,e)}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiTUFBQSxNQUFNQSxFQUFjQyxTQUFTQyxjQUFjLGFBQ3JDQyxFQUFXLENBQ2IsQ0FDSSxNQUFTLG9CQUNULE1BQVMsNkJBQ1QsS0FBUSxzUUFFWixDQUNJLE1BQVMsZ0JBQ1QsTUFBUyxxQkFDVCxLQUFRLHVPQUVaLENBQ0ksTUFBUyxXQUNULE1BQVMsb0NBQ1QsS0FBUSxxSkFVaEIsU0FBU0MsRUFBVUMsRUFBU0MsR0FDeEIsSUFBSUMsRUFBT04sU0FBU08sY0FBYyxPQUNsQ0QsRUFBS0UsVUFBVUMsSUFBSSxRQUVuQixJQUFJQyxFQUFZVixTQUFTTyxjQUFjLE9BQ3ZDRyxFQUFVRixVQUFVQyxJQUFJLGNBQ3hCQyxFQUFVQyxZQUFjUCxFQUFRUSxNQUVoQyxJQUFJQyxFQUFVYixTQUFTTyxjQUFjLE9BQ3JDTSxFQUFRTCxVQUFVQyxJQUFJLFlBQ3RCSSxFQUFRQyxNQUFNQyxnQkFBa0IsUUFBUVgsRUFBUVksVUFFaEQsSUFBSUMsRUFBV2pCLFNBQVNPLGNBQWMsT0FDdENVLEVBQVNULFVBQVVDLElBQUksYUFDdkJRLEVBQVNDLFVBQVlkLEVBQVFlLEtBRTdCYixFQUFLYyxZQUFZVixHQUNqQkosRUFBS2MsWUFBWVAsR0FDakJQLEVBQUtjLFlBQVlILEdBQ2pCSSxRQUFRQyxJQUFJaEIsRUFBS2lCLFVBRWpCbEIsRUFBT2UsWUFBWWQsRUFDdkIsRUE1QkEsV0FDSSxJQUFLLElBQUlrQixLQUFPdEIsRUFDWkMsRUFBVXFCLEVBQUt6QixFQUV0QixDQUpELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QZXRlciBNYXJsZXkncyBQb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuY29uc3QgcHJvamVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0NyYXNpbyBDYWxjdWxhdG9yJyxcclxuICAgICAgICAnaW1hZ2UnOiAnLi9pbWcvY3Jhc2lvQ2FsY3VsYXRvci5wbmcnLFxyXG4gICAgICAgICd0ZXh0JzogJ0NyYXNpbyBjYWxjdWxhdG9yIGlzIGEgc2ltcGxlIHdlYiBjYWxjdWxhdG9yIHRoYXQgaW1wbGVtZW50cyBhIHNpbXBsZSBjYWxjdWxhdG9yIHRoYXQgcmVzcGVjdHMgb3JkZXIgb2Ygb3BlcmF0aW9ucyAoUEVETUFTKS4gSXQgd2FzIGluaXRpYWxseSBhbiBleGVyc2l6ZSBvZiBUaGUgT2RpbiBQcm9qZWN0LCB3aGljaCBkaWQgbm90IGV4cGVjdCBvcmRlciBvZiBvcGVyYXRpb25zIHRvIGJlIHJlc3BlY3RlZCwgdGhhdCBJIHdlbnQgZnVydGhlciB3aXRoLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdCdWRnZXQgS2VlcGVyJyxcclxuICAgICAgICAnaW1hZ2UnOiAnLi9pbWcvY2hlY2tlcnMucG5nJyxcclxuICAgICAgICAndGV4dCc6ICdJIHdhcyBzaWNrIG9mIGFsbCB0aGUgYmxvYXRlZCBidWRnZXRpbmcgc29mdHdhcmUgSSBoYWQgdHJpZWQgc28gSSBkZWNpZGVkIHRvIG1ha2UgbXkgb3duLiBZb3UgZW50ZXIgd2hhdCB5b3Ugc3BlbmQgYW5kIHJlY2VpdmUsIGFuZCBpdCBrZWVwcyB0cmFjay4gSW1wbGVtZW50ZWQgaW4gSmF2YSwgdXNpbmcgYW4gPGVtPnNxbGl0ZTM8L2VtPiBkYXRhYmFzZSBhbmQgPGVtPkphdmFGWDwvZW0+IEdVSScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdDaGVja2VycycsXHJcbiAgICAgICAgJ2ltYWdlJzogJy4vaW1nL2J1ZGdldEtlZXBlci13aW5kb3dZZWFyLnBuZycsXHJcbiAgICAgICAgJ3RleHQnOiAnVGhlIGZpcnN0IGNvbXBsZXggKD8pIHByb2dyYW0gSSBldmVyIG1hZGUuIExvY2FsbHkgcGxheWVkIDItcGxheWVyIENoZWNrZXJzLiBFbmZvcmNlcyBhbGwgcnVsZXMuIEltcGxlbWVudGVkIGluIEphdmEsIHdpdGggYSA8ZW0+U3dpbmc8L2VtPiBHVUkuJyxcclxuICAgIH0sXHJcbl07XHJcblxyXG4oZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGZvciAobGV0IG9iaiBvZiBwcm9qZWN0cykge1xyXG4gICAgICAgIGJ1aWxkQ2FyZChvYmosIHByb2plY3RzRGl2KTtcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGJ1aWxkQ2FyZChwcm9qZWN0LCBwYXJlbnQpIHtcclxuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuXHJcbiAgICBsZXQgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZScpO1xyXG4gICAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcclxuXHJcbiAgICBsZXQgY2FyZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEltZy5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZycpO1xyXG4gICAgY2FyZEltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3Byb2plY3QuaW1hZ2V9JylgO1xyXG5cclxuICAgIGxldCBjYXJkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZFRleHQuY2xhc3NMaXN0LmFkZCgnY2FyZC10ZXh0Jyk7XHJcbiAgICBjYXJkVGV4dC5pbm5lckhUTUwgPSBwcm9qZWN0LnRleHQ7XHJcblxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSW1nKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRleHQpO1xyXG4gICAgY29uc29sZS5sb2coY2FyZC5jaGlsZHJlbik7XHJcblxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNhcmQpO1xyXG59Il0sIm5hbWVzIjpbInByb2plY3RzRGl2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJvamVjdHMiLCJidWlsZENhcmQiLCJwcm9qZWN0IiwicGFyZW50IiwiY2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjYXJkVGl0bGUiLCJ0ZXh0Q29udGVudCIsInRpdGxlIiwiY2FyZEltZyIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaW1hZ2UiLCJjYXJkVGV4dCIsImlubmVySFRNTCIsInRleHQiLCJhcHBlbmRDaGlsZCIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZHJlbiIsIm9iaiJdLCJzb3VyY2VSb290IjoiIn0=