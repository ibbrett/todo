const logs = {
  component: { isActive: true },
  action: { isActive: true },
  handler: { isActive: true },
  memo: { isActive: true },
}

const clog = msg => {
  if (logs.component.isActive) {
    console.log('#'.repeat(16) + ' component render: ' + msg)
  }
}

const alog = msg => {
  if (logs.action.isActive) {
    console.log('#'.repeat(24) + ' action dispatched: ' + msg)
  }
}

const hlog = msg => {
  if (logs.handler.isActive) {
    console.log('#'.repeat(24) + ' event handler called: ' + msg)
  }
}

const mlog = msg => {
  if (logs.memo.isActive) {
    console.log('#'.repeat(24) + ' memo comparison prev/next: ' + msg)
  }
}

export { clog, alog, hlog, mlog }
