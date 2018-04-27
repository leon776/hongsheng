
function showModal (json, img) {
  const data = json;
  //修改内容
  $('#modalPic').attr('src', img);
  $('#modalTitle').html(json.title);
  $('#modalProk').html(json.productKey);
  $('#modalProv').html(json.productVal);
  $('#modalContent').html(json.content);
  $('#modalHref').attr('href', json.href).html(json.href);

  //启动弹窗
  layer.open({
      type: 1,
      title: false,
      closeBtn: 2,
      skin: 'layui-layer-nobg',
      area: ['1000px', '440px'],
      shadeClose: true,
      content: $('#modal')
  });
}