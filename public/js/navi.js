// navi.js

window.addNewNote = async function addNewNote(parent) {
  console.log(parent);
  const data = await (
    await fetch(`https://kdt-api.fe.dev-cos.com/documents`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-username": "sajotuna",
      },
      body: JSON.stringify({
        title: "새 문서",
        parent,
      }),
    })
  ).json();

  location = `/app/${data.id}`;
};

function renderMenuList(list) {
  let items = "";

  list.forEach((e) => {
    items += `<li onclick="location='/app/${
      e.id
    }'" class="btn btn-outline-light overflow-x-hidden overflow-y-hidden text-black d-block rounded border-0 text-start d-flex justify-content-between" style="height: 30px;">
      <div><span type="button" id="collapse" data-bs-toggle="collapse" data-bs-target='#collapse${
        e.id
      }' aria-expanded='false' aria-controls='collapse${
      e.id
    }' onclick="event.stopPropagation();">
        <i class="fa-regular fa-note-sticky" style="color: #4f4f4f;"></i>
      </span>
      ${e.title}
      </div>
      <button class="btn btn-outline-light d-block rounded border-0 p-0" onclick="event.stopPropagation(); addNewNote(${
        e.id
      })" style="font-size: small;">
        <i class="fa-solid fa-plus" style="color: #4f4f4f;"></i>
      </button>
    </li>
    <div class="collapse ps-2" id='collapse${e.id}'>${renderMenuList(
      e.documents
    )}</div>`;
  });

  return items;
}

async function render(path, query) {
  const header = `<div>
        <div class="row">
          <div class="col-8">
            <a href="/" class="link-body-emphasis text-decoration-none">
              <i class="fa-solid fa-book me-2"></i>
              <span class="fs-5 fw-semibold">Notepad</span>
            </a>
          </div>
          <div class="col-4">
            <div class="row">
              <button id="close" class="col btn btn-outline-light text-black d-block rounded border-0 " style="font-size: small;">
                <i class="fa-solid fa-angles-left" style="color: #4f4f4f;"></i>
              </button>
              <button id="write" class="col btn btn-outline-light text-black d-block rounded border-0 " style="font-size: small;">
                <i class="fa-sharp fa-regular fa-pen-to-square" style="color: #4f4f4f;"></i>
              </button>
            </div>
          </div>
        </div>
        <hr>
        <ul class="list-unstyled ps-0" >`;
  const end = `</ul></div>`;

  const response = await fetch(`https://kdt-api.fe.dev-cos.com/documents`, {
    headers: { "x-username": "sajotuna" },
  });
  if (!response.ok) {
    return header + end;
  }
  const data = await response.json();

  const body = renderMenuList(data);

  return header + body + end;
}

export default render;