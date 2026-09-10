

const projectId = "c1fc7f5e-9352-41ca-948a-4d1648957585";
const entityId = "some-id"; // need to get a real entity id

async function test() {
  const url = `https://api.sublay.io/v7/${projectId}/comments`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      foreignId: 'mother-0',
      content: 'test comment'
    })
  });
  console.log(res.status, await res.text());
}
test();
