import breadcrumb from "./breadcrumbs.js";

async function render(data){
  let _breadcrumb = await breadcrumb(data);

  return `
  <!-- top menu -->
  <div id="mainHeader" class="container-fluid align-items-center d-flex">
    <button id="nav-expand" class="btn btn-outline-light text-black rounded border-0 " style="font-size: small; display:none;">
      >>
    </button>
    ${_breadcrumb}
    <div id="savingStatus" class="d-none">
      <span class="me-1">저장 중</span>
      <div class="spinner-border spinner-border-md cl" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div id="delete" class="btn btn-outline-light text-black me-1">
      <i class="fa-solid fa-trash"></i>
    </div>
  </div>`;
}

// <!-- top menu -->
// <div class="d-flex m-2 align-items-center">
//   <div class="me-auto"> document > ${data.title}</div>
//   <div id="savingStatus" class="d-none">
//     <span class="me-1">저장 중</span>
//     <div class="spinner-border spinner-border-md cl" role="status">
//       <span class="visually-hidden">Loading...</span>
//     </div>
//   </div>
//   <div id="delete" class="btn btn-outline-light text-black me-1">
//     <i class="fa-solid fa-trash"></i> 삭제
//   </div>
// </div>

export default render;