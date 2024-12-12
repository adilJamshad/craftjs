/// <reference types="react" />
import { Node } from '../interfaces';
/**
 * A Hook to that provides methods and state information related to the corresponding Node that manages the current component.
 * @param collect - Collector function to consume values from the corresponding Node's state
 */
export declare function useNode<S = null>(
  collect?: (node: Node) => S
): Pick<
  Pick<
    import('../editor/useInternalEditor').useInternalEditorReturnType<S>,
    | 'inContext'
    | 'store'
    | Exclude<
        keyof import('craftjs-utils-meetovo').ConditionallyMergeRecordTypes<
          S,
          {
            actions: {
              setDOM: (id: string, dom: HTMLElement) => void;
              setNodeEvent: (
                eventType: import('../interfaces').NodeEventTypes,
                nodeIdSelector: string | string[],
                source?: string
              ) => void;
              selectNode: (nodeIdSelector?: string | string[]) => void;
              clearEvents: () => void;
              setOptions: (
                cb: (options: Partial<import('../interfaces').Options>) => void
              ) => void;
              setIndicator: (
                indicator: import('../interfaces').Indicator
              ) => void;
              reset: () => void;
              addLinkedNodeFromTree: (
                tree: import('../interfaces').NodeTree,
                parentId: string,
                id: string
              ) => void;
              add: (
                nodeToAdd: Node | Node[],
                parentId: string,
                index?: number
              ) => void;
              addNodeTree: (
                tree: import('../interfaces').NodeTree,
                parentId?: string,
                index?: number
              ) => void;
              delete: (selector: string | string[]) => void;
              deserialize: (
                input:
                  | string
                  | Record<string, import('../interfaces').SerializedNode>
              ) => void;
              move: (
                selector: string | string[] | Node | Node[],
                newParentId: string,
                index: number
              ) => void;
              replaceNodes: (nodes: Record<string, Node>) => void;
              setCustom: (
                selector: string | string[],
                cb: (data: any) => void
              ) => void;
              setHidden: (id: string, bool: boolean) => void;
              setProp: (
                selector: string | string[],
                cb: (props: any) => void
              ) => void;
              setState: (
                cb: (
                  state: import('../interfaces').EditorState,
                  actions: Pick<
                    {
                      setDOM: (id: string, dom: HTMLElement) => void;
                      setNodeEvent: (
                        eventType: import('../interfaces').NodeEventTypes,
                        nodeIdSelector: string | string[],
                        source?: string
                      ) => void;
                      selectNode: (nodeIdSelector?: string | string[]) => void;
                      clearEvents: () => void;
                      setOptions: (
                        cb: (
                          options: Partial<import('../interfaces').Options>
                        ) => void
                      ) => void;
                      setIndicator: (
                        indicator: import('../interfaces').Indicator
                      ) => void;
                      reset: () => void;
                      addLinkedNodeFromTree: (
                        tree: import('../interfaces').NodeTree,
                        parentId: string,
                        id: string
                      ) => void;
                      add: (
                        nodeToAdd: Node | Node[],
                        parentId: string,
                        index?: number
                      ) => void;
                      addNodeTree: (
                        tree: import('../interfaces').NodeTree,
                        parentId?: string,
                        index?: number
                      ) => void;
                      delete: (selector: string | string[]) => void;
                      deserialize: (
                        input:
                          | string
                          | Record<
                              string,
                              import('../interfaces').SerializedNode
                            >
                      ) => void;
                      move: (
                        selector: string | string[] | Node | Node[],
                        newParentId: string,
                        index: number
                      ) => void;
                      replaceNodes: (nodes: Record<string, Node>) => void;
                      setCustom: (
                        selector: string | string[],
                        cb: (data: any) => void
                      ) => void;
                      setHidden: (id: string, bool: boolean) => void;
                      setProp: (
                        selector: string | string[],
                        cb: (props: any) => void
                      ) => void;
                    } & {
                      history: {
                        undo: () => void;
                        redo: () => void;
                        clear: () => void;
                        throttle: (
                          rate?: number
                        ) => Pick<
                          {
                            setDOM: (id: string, dom: HTMLElement) => void;
                            setNodeEvent: (
                              eventType: import('../interfaces').NodeEventTypes,
                              nodeIdSelector: string | string[],
                              source?: string
                            ) => void;
                            selectNode: (
                              nodeIdSelector?: string | string[]
                            ) => void;
                            clearEvents: () => void;
                            setOptions: (
                              cb: (
                                options: Partial<
                                  import('../interfaces').Options
                                >
                              ) => void
                            ) => void;
                            setIndicator: (
                              indicator: import('../interfaces').Indicator
                            ) => void;
                            reset: () => void;
                            addLinkedNodeFromTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId: string,
                              id: string
                            ) => void;
                            add: (
                              nodeToAdd: Node | Node[],
                              parentId: string,
                              index?: number
                            ) => void;
                            addNodeTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId?: string,
                              index?: number
                            ) => void;
                            delete: (selector: string | string[]) => void;
                            deserialize: (
                              input:
                                | string
                                | Record<
                                    string,
                                    import('../interfaces').SerializedNode
                                  >
                            ) => void;
                            move: (
                              selector: string | string[] | Node | Node[],
                              newParentId: string,
                              index: number
                            ) => void;
                            replaceNodes: (nodes: Record<string, Node>) => void;
                            setCustom: (
                              selector: string | string[],
                              cb: (data: any) => void
                            ) => void;
                            setHidden: (id: string, bool: boolean) => void;
                            setProp: (
                              selector: string | string[],
                              cb: (props: any) => void
                            ) => void;
                          },
                          | 'setDOM'
                          | 'setNodeEvent'
                          | 'selectNode'
                          | 'clearEvents'
                          | 'setOptions'
                          | 'setIndicator'
                          | 'reset'
                          | 'addLinkedNodeFromTree'
                          | 'add'
                          | 'addNodeTree'
                          | 'delete'
                          | 'deserialize'
                          | 'move'
                          | 'replaceNodes'
                          | 'setCustom'
                          | 'setHidden'
                          | 'setProp'
                        >;
                        merge: () => Pick<
                          {
                            setDOM: (id: string, dom: HTMLElement) => void;
                            setNodeEvent: (
                              eventType: import('../interfaces').NodeEventTypes,
                              nodeIdSelector: string | string[],
                              source?: string
                            ) => void;
                            selectNode: (
                              nodeIdSelector?: string | string[]
                            ) => void;
                            clearEvents: () => void;
                            setOptions: (
                              cb: (
                                options: Partial<
                                  import('../interfaces').Options
                                >
                              ) => void
                            ) => void;
                            setIndicator: (
                              indicator: import('../interfaces').Indicator
                            ) => void;
                            reset: () => void;
                            addLinkedNodeFromTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId: string,
                              id: string
                            ) => void;
                            add: (
                              nodeToAdd: Node | Node[],
                              parentId: string,
                              index?: number
                            ) => void;
                            addNodeTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId?: string,
                              index?: number
                            ) => void;
                            delete: (selector: string | string[]) => void;
                            deserialize: (
                              input:
                                | string
                                | Record<
                                    string,
                                    import('../interfaces').SerializedNode
                                  >
                            ) => void;
                            move: (
                              selector: string | string[] | Node | Node[],
                              newParentId: string,
                              index: number
                            ) => void;
                            replaceNodes: (nodes: Record<string, Node>) => void;
                            setCustom: (
                              selector: string | string[],
                              cb: (data: any) => void
                            ) => void;
                            setHidden: (id: string, bool: boolean) => void;
                            setProp: (
                              selector: string | string[],
                              cb: (props: any) => void
                            ) => void;
                          },
                          | 'setDOM'
                          | 'setNodeEvent'
                          | 'selectNode'
                          | 'clearEvents'
                          | 'setOptions'
                          | 'setIndicator'
                          | 'reset'
                          | 'addLinkedNodeFromTree'
                          | 'add'
                          | 'addNodeTree'
                          | 'delete'
                          | 'deserialize'
                          | 'move'
                          | 'replaceNodes'
                          | 'setCustom'
                          | 'setHidden'
                          | 'setProp'
                        >;
                        ignore: () => Pick<
                          {
                            setDOM: (id: string, dom: HTMLElement) => void;
                            setNodeEvent: (
                              eventType: import('../interfaces').NodeEventTypes,
                              nodeIdSelector: string | string[],
                              source?: string
                            ) => void;
                            selectNode: (
                              nodeIdSelector?: string | string[]
                            ) => void;
                            clearEvents: () => void;
                            setOptions: (
                              cb: (
                                options: Partial<
                                  import('../interfaces').Options
                                >
                              ) => void
                            ) => void;
                            setIndicator: (
                              indicator: import('../interfaces').Indicator
                            ) => void;
                            reset: () => void;
                            addLinkedNodeFromTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId: string,
                              id: string
                            ) => void;
                            add: (
                              nodeToAdd: Node | Node[],
                              parentId: string,
                              index?: number
                            ) => void;
                            addNodeTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId?: string,
                              index?: number
                            ) => void;
                            delete: (selector: string | string[]) => void;
                            deserialize: (
                              input:
                                | string
                                | Record<
                                    string,
                                    import('../interfaces').SerializedNode
                                  >
                            ) => void;
                            move: (
                              selector: string | string[] | Node | Node[],
                              newParentId: string,
                              index: number
                            ) => void;
                            replaceNodes: (nodes: Record<string, Node>) => void;
                            setCustom: (
                              selector: string | string[],
                              cb: (data: any) => void
                            ) => void;
                            setHidden: (id: string, bool: boolean) => void;
                            setProp: (
                              selector: string | string[],
                              cb: (props: any) => void
                            ) => void;
                          },
                          | 'setDOM'
                          | 'setNodeEvent'
                          | 'selectNode'
                          | 'clearEvents'
                          | 'setOptions'
                          | 'setIndicator'
                          | 'reset'
                          | 'addLinkedNodeFromTree'
                          | 'add'
                          | 'addNodeTree'
                          | 'delete'
                          | 'deserialize'
                          | 'move'
                          | 'replaceNodes'
                          | 'setCustom'
                          | 'setHidden'
                          | 'setProp'
                        >;
                      };
                    },
                    | 'setDOM'
                    | 'setNodeEvent'
                    | 'selectNode'
                    | 'clearEvents'
                    | 'setOptions'
                    | 'setIndicator'
                    | 'reset'
                    | 'addLinkedNodeFromTree'
                    | 'add'
                    | 'addNodeTree'
                    | 'delete'
                    | 'deserialize'
                    | 'move'
                    | 'replaceNodes'
                    | 'setCustom'
                    | 'setHidden'
                    | 'setProp'
                  >
                ) => void
              ) => void;
            } & {
              history: {
                undo: () => void;
                redo: () => void;
                clear: () => void;
                throttle: (
                  rate?: number
                ) => Pick<
                  {
                    setDOM: (id: string, dom: HTMLElement) => void;
                    setNodeEvent: (
                      eventType: import('../interfaces').NodeEventTypes,
                      nodeIdSelector: string | string[],
                      source?: string
                    ) => void;
                    selectNode: (nodeIdSelector?: string | string[]) => void;
                    clearEvents: () => void;
                    setOptions: (
                      cb: (
                        options: Partial<import('../interfaces').Options>
                      ) => void
                    ) => void;
                    setIndicator: (
                      indicator: import('../interfaces').Indicator
                    ) => void;
                    reset: () => void;
                    addLinkedNodeFromTree: (
                      tree: import('../interfaces').NodeTree,
                      parentId: string,
                      id: string
                    ) => void;
                    add: (
                      nodeToAdd: Node | Node[],
                      parentId: string,
                      index?: number
                    ) => void;
                    addNodeTree: (
                      tree: import('../interfaces').NodeTree,
                      parentId?: string,
                      index?: number
                    ) => void;
                    delete: (selector: string | string[]) => void;
                    deserialize: (
                      input:
                        | string
                        | Record<string, import('../interfaces').SerializedNode>
                    ) => void;
                    move: (
                      selector: string | string[] | Node | Node[],
                      newParentId: string,
                      index: number
                    ) => void;
                    replaceNodes: (nodes: Record<string, Node>) => void;
                    setCustom: (
                      selector: string | string[],
                      cb: (data: any) => void
                    ) => void;
                    setHidden: (id: string, bool: boolean) => void;
                    setProp: (
                      selector: string | string[],
                      cb: (props: any) => void
                    ) => void;
                    setState: (
                      cb: (
                        state: import('../interfaces').EditorState,
                        actions: Pick<
                          {
                            setDOM: (id: string, dom: HTMLElement) => void;
                            setNodeEvent: (
                              eventType: import('../interfaces').NodeEventTypes,
                              nodeIdSelector: string | string[],
                              source?: string
                            ) => void;
                            selectNode: (
                              nodeIdSelector?: string | string[]
                            ) => void;
                            clearEvents: () => void;
                            setOptions: (
                              cb: (
                                options: Partial<
                                  import('../interfaces').Options
                                >
                              ) => void
                            ) => void;
                            setIndicator: (
                              indicator: import('../interfaces').Indicator
                            ) => void;
                            reset: () => void;
                            addLinkedNodeFromTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId: string,
                              id: string
                            ) => void;
                            add: (
                              nodeToAdd: Node | Node[],
                              parentId: string,
                              index?: number
                            ) => void;
                            addNodeTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId?: string,
                              index?: number
                            ) => void;
                            delete: (selector: string | string[]) => void;
                            deserialize: (
                              input:
                                | string
                                | Record<
                                    string,
                                    import('../interfaces').SerializedNode
                                  >
                            ) => void;
                            move: (
                              selector: string | string[] | Node | Node[],
                              newParentId: string,
                              index: number
                            ) => void;
                            replaceNodes: (nodes: Record<string, Node>) => void;
                            setCustom: (
                              selector: string | string[],
                              cb: (data: any) => void
                            ) => void;
                            setHidden: (id: string, bool: boolean) => void;
                            setProp: (
                              selector: string | string[],
                              cb: (props: any) => void
                            ) => void;
                          } & {
                            history: {
                              undo: () => void;
                              redo: () => void;
                              clear: () => void;
                              throttle: (
                                rate?: number
                              ) => Pick<
                                {
                                  setDOM: (
                                    id: string,
                                    dom: HTMLElement
                                  ) => void;
                                  setNodeEvent: (
                                    eventType: import('../interfaces').NodeEventTypes,
                                    nodeIdSelector: string | string[],
                                    source?: string
                                  ) => void;
                                  selectNode: (
                                    nodeIdSelector?: string | string[]
                                  ) => void;
                                  clearEvents: () => void;
                                  setOptions: (
                                    cb: (
                                      options: Partial<
                                        import('../interfaces').Options
                                      >
                                    ) => void
                                  ) => void;
                                  setIndicator: (
                                    indicator: import('../interfaces').Indicator
                                  ) => void;
                                  reset: () => void;
                                  addLinkedNodeFromTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId: string,
                                    id: string
                                  ) => void;
                                  add: (
                                    nodeToAdd: Node | Node[],
                                    parentId: string,
                                    index?: number
                                  ) => void;
                                  addNodeTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId?: string,
                                    index?: number
                                  ) => void;
                                  delete: (selector: string | string[]) => void;
                                  deserialize: (
                                    input:
                                      | string
                                      | Record<
                                          string,
                                          import('../interfaces').SerializedNode
                                        >
                                  ) => void;
                                  move: (
                                    selector: string | string[] | Node | Node[],
                                    newParentId: string,
                                    index: number
                                  ) => void;
                                  replaceNodes: (
                                    nodes: Record<string, Node>
                                  ) => void;
                                  setCustom: (
                                    selector: string | string[],
                                    cb: (data: any) => void
                                  ) => void;
                                  setHidden: (
                                    id: string,
                                    bool: boolean
                                  ) => void;
                                  setProp: (
                                    selector: string | string[],
                                    cb: (props: any) => void
                                  ) => void;
                                },
                                | 'setDOM'
                                | 'setNodeEvent'
                                | 'selectNode'
                                | 'clearEvents'
                                | 'setOptions'
                                | 'setIndicator'
                                | 'reset'
                                | 'addLinkedNodeFromTree'
                                | 'add'
                                | 'addNodeTree'
                                | 'delete'
                                | 'deserialize'
                                | 'move'
                                | 'replaceNodes'
                                | 'setCustom'
                                | 'setHidden'
                                | 'setProp'
                              >;
                              merge: () => Pick<
                                {
                                  setDOM: (
                                    id: string,
                                    dom: HTMLElement
                                  ) => void;
                                  setNodeEvent: (
                                    eventType: import('../interfaces').NodeEventTypes,
                                    nodeIdSelector: string | string[],
                                    source?: string
                                  ) => void;
                                  selectNode: (
                                    nodeIdSelector?: string | string[]
                                  ) => void;
                                  clearEvents: () => void;
                                  setOptions: (
                                    cb: (
                                      options: Partial<
                                        import('../interfaces').Options
                                      >
                                    ) => void
                                  ) => void;
                                  setIndicator: (
                                    indicator: import('../interfaces').Indicator
                                  ) => void;
                                  reset: () => void;
                                  addLinkedNodeFromTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId: string,
                                    id: string
                                  ) => void;
                                  add: (
                                    nodeToAdd: Node | Node[],
                                    parentId: string,
                                    index?: number
                                  ) => void;
                                  addNodeTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId?: string,
                                    index?: number
                                  ) => void;
                                  delete: (selector: string | string[]) => void;
                                  deserialize: (
                                    input:
                                      | string
                                      | Record<
                                          string,
                                          import('../interfaces').SerializedNode
                                        >
                                  ) => void;
                                  move: (
                                    selector: string | string[] | Node | Node[],
                                    newParentId: string,
                                    index: number
                                  ) => void;
                                  replaceNodes: (
                                    nodes: Record<string, Node>
                                  ) => void;
                                  setCustom: (
                                    selector: string | string[],
                                    cb: (data: any) => void
                                  ) => void;
                                  setHidden: (
                                    id: string,
                                    bool: boolean
                                  ) => void;
                                  setProp: (
                                    selector: string | string[],
                                    cb: (props: any) => void
                                  ) => void;
                                },
                                | 'setDOM'
                                | 'setNodeEvent'
                                | 'selectNode'
                                | 'clearEvents'
                                | 'setOptions'
                                | 'setIndicator'
                                | 'reset'
                                | 'addLinkedNodeFromTree'
                                | 'add'
                                | 'addNodeTree'
                                | 'delete'
                                | 'deserialize'
                                | 'move'
                                | 'replaceNodes'
                                | 'setCustom'
                                | 'setHidden'
                                | 'setProp'
                              >;
                              ignore: () => Pick<
                                {
                                  setDOM: (
                                    id: string,
                                    dom: HTMLElement
                                  ) => void;
                                  setNodeEvent: (
                                    eventType: import('../interfaces').NodeEventTypes,
                                    nodeIdSelector: string | string[],
                                    source?: string
                                  ) => void;
                                  selectNode: (
                                    nodeIdSelector?: string | string[]
                                  ) => void;
                                  clearEvents: () => void;
                                  setOptions: (
                                    cb: (
                                      options: Partial<
                                        import('../interfaces').Options
                                      >
                                    ) => void
                                  ) => void;
                                  setIndicator: (
                                    indicator: import('../interfaces').Indicator
                                  ) => void;
                                  reset: () => void;
                                  addLinkedNodeFromTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId: string,
                                    id: string
                                  ) => void;
                                  add: (
                                    nodeToAdd: Node | Node[],
                                    parentId: string,
                                    index?: number
                                  ) => void;
                                  addNodeTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId?: string,
                                    index?: number
                                  ) => void;
                                  delete: (selector: string | string[]) => void;
                                  deserialize: (
                                    input:
                                      | string
                                      | Record<
                                          string,
                                          import('../interfaces').SerializedNode
                                        >
                                  ) => void;
                                  move: (
                                    selector: string | string[] | Node | Node[],
                                    newParentId: string,
                                    index: number
                                  ) => void;
                                  replaceNodes: (
                                    nodes: Record<string, Node>
                                  ) => void;
                                  setCustom: (
                                    selector: string | string[],
                                    cb: (data: any) => void
                                  ) => void;
                                  setHidden: (
                                    id: string,
                                    bool: boolean
                                  ) => void;
                                  setProp: (
                                    selector: string | string[],
                                    cb: (props: any) => void
                                  ) => void;
                                },
                                | 'setDOM'
                                | 'setNodeEvent'
                                | 'selectNode'
                                | 'clearEvents'
                                | 'setOptions'
                                | 'setIndicator'
                                | 'reset'
                                | 'addLinkedNodeFromTree'
                                | 'add'
                                | 'addNodeTree'
                                | 'delete'
                                | 'deserialize'
                                | 'move'
                                | 'replaceNodes'
                                | 'setCustom'
                                | 'setHidden'
                                | 'setProp'
                              >;
                            };
                          },
                          | 'setDOM'
                          | 'setNodeEvent'
                          | 'selectNode'
                          | 'clearEvents'
                          | 'setOptions'
                          | 'setIndicator'
                          | 'reset'
                          | 'addLinkedNodeFromTree'
                          | 'add'
                          | 'addNodeTree'
                          | 'delete'
                          | 'deserialize'
                          | 'move'
                          | 'replaceNodes'
                          | 'setCustom'
                          | 'setHidden'
                          | 'setProp'
                        >
                      ) => void
                    ) => void;
                  },
                  | 'reset'
                  | 'addLinkedNodeFromTree'
                  | 'add'
                  | 'addNodeTree'
                  | 'delete'
                  | 'deserialize'
                  | 'move'
                  | 'replaceNodes'
                  | 'setCustom'
                  | 'setHidden'
                  | 'setProp'
                  | 'setState'
                >;
                merge: () => Pick<
                  {
                    setDOM: (id: string, dom: HTMLElement) => void;
                    setNodeEvent: (
                      eventType: import('../interfaces').NodeEventTypes,
                      nodeIdSelector: string | string[],
                      source?: string
                    ) => void;
                    selectNode: (nodeIdSelector?: string | string[]) => void;
                    clearEvents: () => void;
                    setOptions: (
                      cb: (
                        options: Partial<import('../interfaces').Options>
                      ) => void
                    ) => void;
                    setIndicator: (
                      indicator: import('../interfaces').Indicator
                    ) => void;
                    reset: () => void;
                    addLinkedNodeFromTree: (
                      tree: import('../interfaces').NodeTree,
                      parentId: string,
                      id: string
                    ) => void;
                    add: (
                      nodeToAdd: Node | Node[],
                      parentId: string,
                      index?: number
                    ) => void;
                    addNodeTree: (
                      tree: import('../interfaces').NodeTree,
                      parentId?: string,
                      index?: number
                    ) => void;
                    delete: (selector: string | string[]) => void;
                    deserialize: (
                      input:
                        | string
                        | Record<string, import('../interfaces').SerializedNode>
                    ) => void;
                    move: (
                      selector: string | string[] | Node | Node[],
                      newParentId: string,
                      index: number
                    ) => void;
                    replaceNodes: (nodes: Record<string, Node>) => void;
                    setCustom: (
                      selector: string | string[],
                      cb: (data: any) => void
                    ) => void;
                    setHidden: (id: string, bool: boolean) => void;
                    setProp: (
                      selector: string | string[],
                      cb: (props: any) => void
                    ) => void;
                    setState: (
                      cb: (
                        state: import('../interfaces').EditorState,
                        actions: Pick<
                          {
                            setDOM: (id: string, dom: HTMLElement) => void;
                            setNodeEvent: (
                              eventType: import('../interfaces').NodeEventTypes,
                              nodeIdSelector: string | string[],
                              source?: string
                            ) => void;
                            selectNode: (
                              nodeIdSelector?: string | string[]
                            ) => void;
                            clearEvents: () => void;
                            setOptions: (
                              cb: (
                                options: Partial<
                                  import('../interfaces').Options
                                >
                              ) => void
                            ) => void;
                            setIndicator: (
                              indicator: import('../interfaces').Indicator
                            ) => void;
                            reset: () => void;
                            addLinkedNodeFromTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId: string,
                              id: string
                            ) => void;
                            add: (
                              nodeToAdd: Node | Node[],
                              parentId: string,
                              index?: number
                            ) => void;
                            addNodeTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId?: string,
                              index?: number
                            ) => void;
                            delete: (selector: string | string[]) => void;
                            deserialize: (
                              input:
                                | string
                                | Record<
                                    string,
                                    import('../interfaces').SerializedNode
                                  >
                            ) => void;
                            move: (
                              selector: string | string[] | Node | Node[],
                              newParentId: string,
                              index: number
                            ) => void;
                            replaceNodes: (nodes: Record<string, Node>) => void;
                            setCustom: (
                              selector: string | string[],
                              cb: (data: any) => void
                            ) => void;
                            setHidden: (id: string, bool: boolean) => void;
                            setProp: (
                              selector: string | string[],
                              cb: (props: any) => void
                            ) => void;
                          } & {
                            history: {
                              undo: () => void;
                              redo: () => void;
                              clear: () => void;
                              throttle: (
                                rate?: number
                              ) => Pick<
                                {
                                  setDOM: (
                                    id: string,
                                    dom: HTMLElement
                                  ) => void;
                                  setNodeEvent: (
                                    eventType: import('../interfaces').NodeEventTypes,
                                    nodeIdSelector: string | string[],
                                    source?: string
                                  ) => void;
                                  selectNode: (
                                    nodeIdSelector?: string | string[]
                                  ) => void;
                                  clearEvents: () => void;
                                  setOptions: (
                                    cb: (
                                      options: Partial<
                                        import('../interfaces').Options
                                      >
                                    ) => void
                                  ) => void;
                                  setIndicator: (
                                    indicator: import('../interfaces').Indicator
                                  ) => void;
                                  reset: () => void;
                                  addLinkedNodeFromTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId: string,
                                    id: string
                                  ) => void;
                                  add: (
                                    nodeToAdd: Node | Node[],
                                    parentId: string,
                                    index?: number
                                  ) => void;
                                  addNodeTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId?: string,
                                    index?: number
                                  ) => void;
                                  delete: (selector: string | string[]) => void;
                                  deserialize: (
                                    input:
                                      | string
                                      | Record<
                                          string,
                                          import('../interfaces').SerializedNode
                                        >
                                  ) => void;
                                  move: (
                                    selector: string | string[] | Node | Node[],
                                    newParentId: string,
                                    index: number
                                  ) => void;
                                  replaceNodes: (
                                    nodes: Record<string, Node>
                                  ) => void;
                                  setCustom: (
                                    selector: string | string[],
                                    cb: (data: any) => void
                                  ) => void;
                                  setHidden: (
                                    id: string,
                                    bool: boolean
                                  ) => void;
                                  setProp: (
                                    selector: string | string[],
                                    cb: (props: any) => void
                                  ) => void;
                                },
                                | 'setDOM'
                                | 'setNodeEvent'
                                | 'selectNode'
                                | 'clearEvents'
                                | 'setOptions'
                                | 'setIndicator'
                                | 'reset'
                                | 'addLinkedNodeFromTree'
                                | 'add'
                                | 'addNodeTree'
                                | 'delete'
                                | 'deserialize'
                                | 'move'
                                | 'replaceNodes'
                                | 'setCustom'
                                | 'setHidden'
                                | 'setProp'
                              >;
                              merge: () => Pick<
                                {
                                  setDOM: (
                                    id: string,
                                    dom: HTMLElement
                                  ) => void;
                                  setNodeEvent: (
                                    eventType: import('../interfaces').NodeEventTypes,
                                    nodeIdSelector: string | string[],
                                    source?: string
                                  ) => void;
                                  selectNode: (
                                    nodeIdSelector?: string | string[]
                                  ) => void;
                                  clearEvents: () => void;
                                  setOptions: (
                                    cb: (
                                      options: Partial<
                                        import('../interfaces').Options
                                      >
                                    ) => void
                                  ) => void;
                                  setIndicator: (
                                    indicator: import('../interfaces').Indicator
                                  ) => void;
                                  reset: () => void;
                                  addLinkedNodeFromTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId: string,
                                    id: string
                                  ) => void;
                                  add: (
                                    nodeToAdd: Node | Node[],
                                    parentId: string,
                                    index?: number
                                  ) => void;
                                  addNodeTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId?: string,
                                    index?: number
                                  ) => void;
                                  delete: (selector: string | string[]) => void;
                                  deserialize: (
                                    input:
                                      | string
                                      | Record<
                                          string,
                                          import('../interfaces').SerializedNode
                                        >
                                  ) => void;
                                  move: (
                                    selector: string | string[] | Node | Node[],
                                    newParentId: string,
                                    index: number
                                  ) => void;
                                  replaceNodes: (
                                    nodes: Record<string, Node>
                                  ) => void;
                                  setCustom: (
                                    selector: string | string[],
                                    cb: (data: any) => void
                                  ) => void;
                                  setHidden: (
                                    id: string,
                                    bool: boolean
                                  ) => void;
                                  setProp: (
                                    selector: string | string[],
                                    cb: (props: any) => void
                                  ) => void;
                                },
                                | 'setDOM'
                                | 'setNodeEvent'
                                | 'selectNode'
                                | 'clearEvents'
                                | 'setOptions'
                                | 'setIndicator'
                                | 'reset'
                                | 'addLinkedNodeFromTree'
                                | 'add'
                                | 'addNodeTree'
                                | 'delete'
                                | 'deserialize'
                                | 'move'
                                | 'replaceNodes'
                                | 'setCustom'
                                | 'setHidden'
                                | 'setProp'
                              >;
                              ignore: () => Pick<
                                {
                                  setDOM: (
                                    id: string,
                                    dom: HTMLElement
                                  ) => void;
                                  setNodeEvent: (
                                    eventType: import('../interfaces').NodeEventTypes,
                                    nodeIdSelector: string | string[],
                                    source?: string
                                  ) => void;
                                  selectNode: (
                                    nodeIdSelector?: string | string[]
                                  ) => void;
                                  clearEvents: () => void;
                                  setOptions: (
                                    cb: (
                                      options: Partial<
                                        import('../interfaces').Options
                                      >
                                    ) => void
                                  ) => void;
                                  setIndicator: (
                                    indicator: import('../interfaces').Indicator
                                  ) => void;
                                  reset: () => void;
                                  addLinkedNodeFromTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId: string,
                                    id: string
                                  ) => void;
                                  add: (
                                    nodeToAdd: Node | Node[],
                                    parentId: string,
                                    index?: number
                                  ) => void;
                                  addNodeTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId?: string,
                                    index?: number
                                  ) => void;
                                  delete: (selector: string | string[]) => void;
                                  deserialize: (
                                    input:
                                      | string
                                      | Record<
                                          string,
                                          import('../interfaces').SerializedNode
                                        >
                                  ) => void;
                                  move: (
                                    selector: string | string[] | Node | Node[],
                                    newParentId: string,
                                    index: number
                                  ) => void;
                                  replaceNodes: (
                                    nodes: Record<string, Node>
                                  ) => void;
                                  setCustom: (
                                    selector: string | string[],
                                    cb: (data: any) => void
                                  ) => void;
                                  setHidden: (
                                    id: string,
                                    bool: boolean
                                  ) => void;
                                  setProp: (
                                    selector: string | string[],
                                    cb: (props: any) => void
                                  ) => void;
                                },
                                | 'setDOM'
                                | 'setNodeEvent'
                                | 'selectNode'
                                | 'clearEvents'
                                | 'setOptions'
                                | 'setIndicator'
                                | 'reset'
                                | 'addLinkedNodeFromTree'
                                | 'add'
                                | 'addNodeTree'
                                | 'delete'
                                | 'deserialize'
                                | 'move'
                                | 'replaceNodes'
                                | 'setCustom'
                                | 'setHidden'
                                | 'setProp'
                              >;
                            };
                          },
                          | 'setDOM'
                          | 'setNodeEvent'
                          | 'selectNode'
                          | 'clearEvents'
                          | 'setOptions'
                          | 'setIndicator'
                          | 'reset'
                          | 'addLinkedNodeFromTree'
                          | 'add'
                          | 'addNodeTree'
                          | 'delete'
                          | 'deserialize'
                          | 'move'
                          | 'replaceNodes'
                          | 'setCustom'
                          | 'setHidden'
                          | 'setProp'
                        >
                      ) => void
                    ) => void;
                  },
                  | 'reset'
                  | 'addLinkedNodeFromTree'
                  | 'add'
                  | 'addNodeTree'
                  | 'delete'
                  | 'deserialize'
                  | 'move'
                  | 'replaceNodes'
                  | 'setCustom'
                  | 'setHidden'
                  | 'setProp'
                  | 'setState'
                >;
                ignore: () => Pick<
                  {
                    setDOM: (id: string, dom: HTMLElement) => void;
                    setNodeEvent: (
                      eventType: import('../interfaces').NodeEventTypes,
                      nodeIdSelector: string | string[],
                      source?: string
                    ) => void;
                    selectNode: (nodeIdSelector?: string | string[]) => void;
                    clearEvents: () => void;
                    setOptions: (
                      cb: (
                        options: Partial<import('../interfaces').Options>
                      ) => void
                    ) => void;
                    setIndicator: (
                      indicator: import('../interfaces').Indicator
                    ) => void;
                    reset: () => void;
                    addLinkedNodeFromTree: (
                      tree: import('../interfaces').NodeTree,
                      parentId: string,
                      id: string
                    ) => void;
                    add: (
                      nodeToAdd: Node | Node[],
                      parentId: string,
                      index?: number
                    ) => void;
                    addNodeTree: (
                      tree: import('../interfaces').NodeTree,
                      parentId?: string,
                      index?: number
                    ) => void;
                    delete: (selector: string | string[]) => void;
                    deserialize: (
                      input:
                        | string
                        | Record<string, import('../interfaces').SerializedNode>
                    ) => void;
                    move: (
                      selector: string | string[] | Node | Node[],
                      newParentId: string,
                      index: number
                    ) => void;
                    replaceNodes: (nodes: Record<string, Node>) => void;
                    setCustom: (
                      selector: string | string[],
                      cb: (data: any) => void
                    ) => void;
                    setHidden: (id: string, bool: boolean) => void;
                    setProp: (
                      selector: string | string[],
                      cb: (props: any) => void
                    ) => void;
                    setState: (
                      cb: (
                        state: import('../interfaces').EditorState,
                        actions: Pick<
                          {
                            setDOM: (id: string, dom: HTMLElement) => void;
                            setNodeEvent: (
                              eventType: import('../interfaces').NodeEventTypes,
                              nodeIdSelector: string | string[],
                              source?: string
                            ) => void;
                            selectNode: (
                              nodeIdSelector?: string | string[]
                            ) => void;
                            clearEvents: () => void;
                            setOptions: (
                              cb: (
                                options: Partial<
                                  import('../interfaces').Options
                                >
                              ) => void
                            ) => void;
                            setIndicator: (
                              indicator: import('../interfaces').Indicator
                            ) => void;
                            reset: () => void;
                            addLinkedNodeFromTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId: string,
                              id: string
                            ) => void;
                            add: (
                              nodeToAdd: Node | Node[],
                              parentId: string,
                              index?: number
                            ) => void;
                            addNodeTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId?: string,
                              index?: number
                            ) => void;
                            delete: (selector: string | string[]) => void;
                            deserialize: (
                              input:
                                | string
                                | Record<
                                    string,
                                    import('../interfaces').SerializedNode
                                  >
                            ) => void;
                            move: (
                              selector: string | string[] | Node | Node[],
                              newParentId: string,
                              index: number
                            ) => void;
                            replaceNodes: (nodes: Record<string, Node>) => void;
                            setCustom: (
                              selector: string | string[],
                              cb: (data: any) => void
                            ) => void;
                            setHidden: (id: string, bool: boolean) => void;
                            setProp: (
                              selector: string | string[],
                              cb: (props: any) => void
                            ) => void;
                          } & {
                            history: {
                              undo: () => void;
                              redo: () => void;
                              clear: () => void;
                              throttle: (
                                rate?: number
                              ) => Pick<
                                {
                                  setDOM: (
                                    id: string,
                                    dom: HTMLElement
                                  ) => void;
                                  setNodeEvent: (
                                    eventType: import('../interfaces').NodeEventTypes,
                                    nodeIdSelector: string | string[],
                                    source?: string
                                  ) => void;
                                  selectNode: (
                                    nodeIdSelector?: string | string[]
                                  ) => void;
                                  clearEvents: () => void;
                                  setOptions: (
                                    cb: (
                                      options: Partial<
                                        import('../interfaces').Options
                                      >
                                    ) => void
                                  ) => void;
                                  setIndicator: (
                                    indicator: import('../interfaces').Indicator
                                  ) => void;
                                  reset: () => void;
                                  addLinkedNodeFromTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId: string,
                                    id: string
                                  ) => void;
                                  add: (
                                    nodeToAdd: Node | Node[],
                                    parentId: string,
                                    index?: number
                                  ) => void;
                                  addNodeTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId?: string,
                                    index?: number
                                  ) => void;
                                  delete: (selector: string | string[]) => void;
                                  deserialize: (
                                    input:
                                      | string
                                      | Record<
                                          string,
                                          import('../interfaces').SerializedNode
                                        >
                                  ) => void;
                                  move: (
                                    selector: string | string[] | Node | Node[],
                                    newParentId: string,
                                    index: number
                                  ) => void;
                                  replaceNodes: (
                                    nodes: Record<string, Node>
                                  ) => void;
                                  setCustom: (
                                    selector: string | string[],
                                    cb: (data: any) => void
                                  ) => void;
                                  setHidden: (
                                    id: string,
                                    bool: boolean
                                  ) => void;
                                  setProp: (
                                    selector: string | string[],
                                    cb: (props: any) => void
                                  ) => void;
                                },
                                | 'setDOM'
                                | 'setNodeEvent'
                                | 'selectNode'
                                | 'clearEvents'
                                | 'setOptions'
                                | 'setIndicator'
                                | 'reset'
                                | 'addLinkedNodeFromTree'
                                | 'add'
                                | 'addNodeTree'
                                | 'delete'
                                | 'deserialize'
                                | 'move'
                                | 'replaceNodes'
                                | 'setCustom'
                                | 'setHidden'
                                | 'setProp'
                              >;
                              merge: () => Pick<
                                {
                                  setDOM: (
                                    id: string,
                                    dom: HTMLElement
                                  ) => void;
                                  setNodeEvent: (
                                    eventType: import('../interfaces').NodeEventTypes,
                                    nodeIdSelector: string | string[],
                                    source?: string
                                  ) => void;
                                  selectNode: (
                                    nodeIdSelector?: string | string[]
                                  ) => void;
                                  clearEvents: () => void;
                                  setOptions: (
                                    cb: (
                                      options: Partial<
                                        import('../interfaces').Options
                                      >
                                    ) => void
                                  ) => void;
                                  setIndicator: (
                                    indicator: import('../interfaces').Indicator
                                  ) => void;
                                  reset: () => void;
                                  addLinkedNodeFromTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId: string,
                                    id: string
                                  ) => void;
                                  add: (
                                    nodeToAdd: Node | Node[],
                                    parentId: string,
                                    index?: number
                                  ) => void;
                                  addNodeTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId?: string,
                                    index?: number
                                  ) => void;
                                  delete: (selector: string | string[]) => void;
                                  deserialize: (
                                    input:
                                      | string
                                      | Record<
                                          string,
                                          import('../interfaces').SerializedNode
                                        >
                                  ) => void;
                                  move: (
                                    selector: string | string[] | Node | Node[],
                                    newParentId: string,
                                    index: number
                                  ) => void;
                                  replaceNodes: (
                                    nodes: Record<string, Node>
                                  ) => void;
                                  setCustom: (
                                    selector: string | string[],
                                    cb: (data: any) => void
                                  ) => void;
                                  setHidden: (
                                    id: string,
                                    bool: boolean
                                  ) => void;
                                  setProp: (
                                    selector: string | string[],
                                    cb: (props: any) => void
                                  ) => void;
                                },
                                | 'setDOM'
                                | 'setNodeEvent'
                                | 'selectNode'
                                | 'clearEvents'
                                | 'setOptions'
                                | 'setIndicator'
                                | 'reset'
                                | 'addLinkedNodeFromTree'
                                | 'add'
                                | 'addNodeTree'
                                | 'delete'
                                | 'deserialize'
                                | 'move'
                                | 'replaceNodes'
                                | 'setCustom'
                                | 'setHidden'
                                | 'setProp'
                              >;
                              ignore: () => Pick<
                                {
                                  setDOM: (
                                    id: string,
                                    dom: HTMLElement
                                  ) => void;
                                  setNodeEvent: (
                                    eventType: import('../interfaces').NodeEventTypes,
                                    nodeIdSelector: string | string[],
                                    source?: string
                                  ) => void;
                                  selectNode: (
                                    nodeIdSelector?: string | string[]
                                  ) => void;
                                  clearEvents: () => void;
                                  setOptions: (
                                    cb: (
                                      options: Partial<
                                        import('../interfaces').Options
                                      >
                                    ) => void
                                  ) => void;
                                  setIndicator: (
                                    indicator: import('../interfaces').Indicator
                                  ) => void;
                                  reset: () => void;
                                  addLinkedNodeFromTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId: string,
                                    id: string
                                  ) => void;
                                  add: (
                                    nodeToAdd: Node | Node[],
                                    parentId: string,
                                    index?: number
                                  ) => void;
                                  addNodeTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId?: string,
                                    index?: number
                                  ) => void;
                                  delete: (selector: string | string[]) => void;
                                  deserialize: (
                                    input:
                                      | string
                                      | Record<
                                          string,
                                          import('../interfaces').SerializedNode
                                        >
                                  ) => void;
                                  move: (
                                    selector: string | string[] | Node | Node[],
                                    newParentId: string,
                                    index: number
                                  ) => void;
                                  replaceNodes: (
                                    nodes: Record<string, Node>
                                  ) => void;
                                  setCustom: (
                                    selector: string | string[],
                                    cb: (data: any) => void
                                  ) => void;
                                  setHidden: (
                                    id: string,
                                    bool: boolean
                                  ) => void;
                                  setProp: (
                                    selector: string | string[],
                                    cb: (props: any) => void
                                  ) => void;
                                },
                                | 'setDOM'
                                | 'setNodeEvent'
                                | 'selectNode'
                                | 'clearEvents'
                                | 'setOptions'
                                | 'setIndicator'
                                | 'reset'
                                | 'addLinkedNodeFromTree'
                                | 'add'
                                | 'addNodeTree'
                                | 'delete'
                                | 'deserialize'
                                | 'move'
                                | 'replaceNodes'
                                | 'setCustom'
                                | 'setHidden'
                                | 'setProp'
                              >;
                            };
                          },
                          | 'setDOM'
                          | 'setNodeEvent'
                          | 'selectNode'
                          | 'clearEvents'
                          | 'setOptions'
                          | 'setIndicator'
                          | 'reset'
                          | 'addLinkedNodeFromTree'
                          | 'add'
                          | 'addNodeTree'
                          | 'delete'
                          | 'deserialize'
                          | 'move'
                          | 'replaceNodes'
                          | 'setCustom'
                          | 'setHidden'
                          | 'setProp'
                        >
                      ) => void
                    ) => void;
                  },
                  | 'reset'
                  | 'addLinkedNodeFromTree'
                  | 'add'
                  | 'addNodeTree'
                  | 'delete'
                  | 'deserialize'
                  | 'move'
                  | 'replaceNodes'
                  | 'setCustom'
                  | 'setHidden'
                  | 'setProp'
                  | 'setState'
                >;
              };
            };
            query: {
              getDropPlaceholder: (
                source: string | string[] | Node | Node[],
                target: string,
                pos: {
                  x: number;
                  y: number;
                },
                nodesToDOM?: (node: Node) => HTMLElement
              ) => import('../interfaces').Indicator;
              getOptions: () => import('../interfaces').Options;
              getNodes: () => Record<string, Node>;
              node: (
                id: string
              ) => {
                isCanvas(): boolean;
                isRoot(): boolean;
                isLinkedNode(): boolean;
                isTopLevelNode(): any;
                isDeletable(): boolean;
                isParentOfTopLevelNodes: () => boolean;
                isParentOfTopLevelCanvas(): any;
                isSelected(): boolean;
                isHovered(): boolean;
                isDragged(): boolean;
                get(): Node;
                ancestors(deep?: boolean): string[];
                descendants(
                  deep?: boolean,
                  includeOnly?: 'linkedNodes' | 'childNodes'
                ): string[];
                linkedNodes(): string[];
                childNodes(): string[];
                isDraggable(onError?: (err: string) => void): boolean;
                isDroppable(
                  selector: string | string[] | Node | Node[],
                  onError?: (err: string) => void
                ): boolean;
                toSerializedNode(): import('../interfaces').SerializedNode;
                toNodeTree(
                  includeOnly?: 'linkedNodes' | 'childNodes'
                ): {
                  rootNodeId: string;
                  nodes: any;
                };
                decendants(deep?: boolean): any;
                isTopLevelCanvas(): boolean;
              };
              getSerializedNodes: () => Record<
                string,
                import('../interfaces').SerializedNode
              >;
              getEvent: (
                eventType: import('../interfaces').NodeEventTypes
              ) => {
                contains(id: string): boolean;
                isEmpty(): boolean;
                first(): any;
                last(): any;
                all(): string[];
                size(): any;
                at(i: number): any;
                raw(): Set<string>;
              };
              serialize: () => string;
              parseReactElement: (
                reactElement: import('react').ReactElement<
                  any,
                  | string
                  | ((props: any) => import('react').ReactElement<any, any>)
                  | (new (props: any) => import('react').Component<
                      any,
                      any,
                      any
                    >)
                >
              ) => {
                toNodeTree(
                  normalize?: (
                    node: Node,
                    jsx: import('react').ReactElement<
                      any,
                      | string
                      | ((props: any) => import('react').ReactElement<any, any>)
                      | (new (props: any) => import('react').Component<
                          any,
                          any,
                          any
                        >)
                    >
                  ) => void
                ): import('../interfaces').NodeTree;
              };
              parseSerializedNode: (
                serializedNode: import('../interfaces').SerializedNode
              ) => {
                toNode(normalize?: (node: Node) => void): Node;
              };
              parseFreshNode: (
                node: import('../interfaces').FreshNode
              ) => {
                toNode(normalize?: (node: Node) => void): Node;
              };
              createNode: (
                reactElement: import('react').ReactElement<
                  any,
                  | string
                  | ((props: any) => import('react').ReactElement<any, any>)
                  | (new (props: any) => import('react').Component<
                      any,
                      any,
                      any
                    >)
                >,
                extras?: any
              ) => any;
              getState: () => import('../interfaces').EditorState;
            } & {
              history: {
                canUndo: () => boolean;
                canRedo: () => boolean;
              };
            };
          }
        >,
        'query' | 'actions' | 'connectors'
      >
  > & {
    id: string;
    related: boolean;
    inNodeContext: boolean;
    actions: {
      setProp: (cb: any, throttleRate?: number) => void;
      setCustom: (cb: any, throttleRate?: number) => void;
      setHidden: (bool: boolean) => void;
    };
    connectors: import('craftjs-utils-meetovo').ChainableConnectors<
      {
        connect: (dom: HTMLElement) => HTMLElement;
        drag: (dom: HTMLElement) => HTMLElement;
      },
      | HTMLElement
      | import('react').ReactElement<
          any,
          | string
          | ((props: any) => import('react').ReactElement<any, any>)
          | (new (props: any) => import('react').Component<any, any, any>)
        >
    >;
  },
  | 'inContext'
  | 'store'
  | Exclude<
      Exclude<
        keyof import('craftjs-utils-meetovo').ConditionallyMergeRecordTypes<
          S,
          {
            actions: {
              setDOM: (id: string, dom: HTMLElement) => void;
              setNodeEvent: (
                eventType: import('../interfaces').NodeEventTypes,
                nodeIdSelector: string | string[],
                source?: string
              ) => void;
              selectNode: (nodeIdSelector?: string | string[]) => void;
              clearEvents: () => void;
              setOptions: (
                cb: (options: Partial<import('../interfaces').Options>) => void
              ) => void;
              setIndicator: (
                indicator: import('../interfaces').Indicator
              ) => void;
              reset: () => void;
              addLinkedNodeFromTree: (
                tree: import('../interfaces').NodeTree,
                parentId: string,
                id: string
              ) => void;
              add: (
                nodeToAdd: Node | Node[],
                parentId: string,
                index?: number
              ) => void;
              addNodeTree: (
                tree: import('../interfaces').NodeTree,
                parentId?: string,
                index?: number
              ) => void;
              delete: (selector: string | string[]) => void;
              deserialize: (
                input:
                  | string
                  | Record<string, import('../interfaces').SerializedNode>
              ) => void;
              move: (
                selector: string | string[] | Node | Node[],
                newParentId: string,
                index: number
              ) => void;
              replaceNodes: (nodes: Record<string, Node>) => void;
              setCustom: (
                selector: string | string[],
                cb: (data: any) => void
              ) => void;
              setHidden: (id: string, bool: boolean) => void;
              setProp: (
                selector: string | string[],
                cb: (props: any) => void
              ) => void;
              setState: (
                cb: (
                  state: import('../interfaces').EditorState,
                  actions: Pick<
                    {
                      setDOM: (id: string, dom: HTMLElement) => void;
                      setNodeEvent: (
                        eventType: import('../interfaces').NodeEventTypes,
                        nodeIdSelector: string | string[],
                        source?: string
                      ) => void;
                      selectNode: (nodeIdSelector?: string | string[]) => void;
                      clearEvents: () => void;
                      setOptions: (
                        cb: (
                          options: Partial<import('../interfaces').Options>
                        ) => void
                      ) => void;
                      setIndicator: (
                        indicator: import('../interfaces').Indicator
                      ) => void;
                      reset: () => void;
                      addLinkedNodeFromTree: (
                        tree: import('../interfaces').NodeTree,
                        parentId: string,
                        id: string
                      ) => void;
                      add: (
                        nodeToAdd: Node | Node[],
                        parentId: string,
                        index?: number
                      ) => void;
                      addNodeTree: (
                        tree: import('../interfaces').NodeTree,
                        parentId?: string,
                        index?: number
                      ) => void;
                      delete: (selector: string | string[]) => void;
                      deserialize: (
                        input:
                          | string
                          | Record<
                              string,
                              import('../interfaces').SerializedNode
                            >
                      ) => void;
                      move: (
                        selector: string | string[] | Node | Node[],
                        newParentId: string,
                        index: number
                      ) => void;
                      replaceNodes: (nodes: Record<string, Node>) => void;
                      setCustom: (
                        selector: string | string[],
                        cb: (data: any) => void
                      ) => void;
                      setHidden: (id: string, bool: boolean) => void;
                      setProp: (
                        selector: string | string[],
                        cb: (props: any) => void
                      ) => void;
                    } & {
                      history: {
                        undo: () => void;
                        redo: () => void;
                        clear: () => void;
                        throttle: (
                          rate?: number
                        ) => Pick<
                          {
                            setDOM: (id: string, dom: HTMLElement) => void;
                            setNodeEvent: (
                              eventType: import('../interfaces').NodeEventTypes,
                              nodeIdSelector: string | string[],
                              source?: string
                            ) => void;
                            selectNode: (
                              nodeIdSelector?: string | string[]
                            ) => void;
                            clearEvents: () => void;
                            setOptions: (
                              cb: (
                                options: Partial<
                                  import('../interfaces').Options
                                >
                              ) => void
                            ) => void;
                            setIndicator: (
                              indicator: import('../interfaces').Indicator
                            ) => void;
                            reset: () => void;
                            addLinkedNodeFromTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId: string,
                              id: string
                            ) => void;
                            add: (
                              nodeToAdd: Node | Node[],
                              parentId: string,
                              index?: number
                            ) => void;
                            addNodeTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId?: string,
                              index?: number
                            ) => void;
                            delete: (selector: string | string[]) => void;
                            deserialize: (
                              input:
                                | string
                                | Record<
                                    string,
                                    import('../interfaces').SerializedNode
                                  >
                            ) => void;
                            move: (
                              selector: string | string[] | Node | Node[],
                              newParentId: string,
                              index: number
                            ) => void;
                            replaceNodes: (nodes: Record<string, Node>) => void;
                            setCustom: (
                              selector: string | string[],
                              cb: (data: any) => void
                            ) => void;
                            setHidden: (id: string, bool: boolean) => void;
                            setProp: (
                              selector: string | string[],
                              cb: (props: any) => void
                            ) => void;
                          },
                          | 'setDOM'
                          | 'setNodeEvent'
                          | 'selectNode'
                          | 'clearEvents'
                          | 'setOptions'
                          | 'setIndicator'
                          | 'reset'
                          | 'addLinkedNodeFromTree'
                          | 'add'
                          | 'addNodeTree'
                          | 'delete'
                          | 'deserialize'
                          | 'move'
                          | 'replaceNodes'
                          | 'setCustom'
                          | 'setHidden'
                          | 'setProp'
                        >;
                        merge: () => Pick<
                          {
                            setDOM: (id: string, dom: HTMLElement) => void;
                            setNodeEvent: (
                              eventType: import('../interfaces').NodeEventTypes,
                              nodeIdSelector: string | string[],
                              source?: string
                            ) => void;
                            selectNode: (
                              nodeIdSelector?: string | string[]
                            ) => void;
                            clearEvents: () => void;
                            setOptions: (
                              cb: (
                                options: Partial<
                                  import('../interfaces').Options
                                >
                              ) => void
                            ) => void;
                            setIndicator: (
                              indicator: import('../interfaces').Indicator
                            ) => void;
                            reset: () => void;
                            addLinkedNodeFromTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId: string,
                              id: string
                            ) => void;
                            add: (
                              nodeToAdd: Node | Node[],
                              parentId: string,
                              index?: number
                            ) => void;
                            addNodeTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId?: string,
                              index?: number
                            ) => void;
                            delete: (selector: string | string[]) => void;
                            deserialize: (
                              input:
                                | string
                                | Record<
                                    string,
                                    import('../interfaces').SerializedNode
                                  >
                            ) => void;
                            move: (
                              selector: string | string[] | Node | Node[],
                              newParentId: string,
                              index: number
                            ) => void;
                            replaceNodes: (nodes: Record<string, Node>) => void;
                            setCustom: (
                              selector: string | string[],
                              cb: (data: any) => void
                            ) => void;
                            setHidden: (id: string, bool: boolean) => void;
                            setProp: (
                              selector: string | string[],
                              cb: (props: any) => void
                            ) => void;
                          },
                          | 'setDOM'
                          | 'setNodeEvent'
                          | 'selectNode'
                          | 'clearEvents'
                          | 'setOptions'
                          | 'setIndicator'
                          | 'reset'
                          | 'addLinkedNodeFromTree'
                          | 'add'
                          | 'addNodeTree'
                          | 'delete'
                          | 'deserialize'
                          | 'move'
                          | 'replaceNodes'
                          | 'setCustom'
                          | 'setHidden'
                          | 'setProp'
                        >;
                        ignore: () => Pick<
                          {
                            setDOM: (id: string, dom: HTMLElement) => void;
                            setNodeEvent: (
                              eventType: import('../interfaces').NodeEventTypes,
                              nodeIdSelector: string | string[],
                              source?: string
                            ) => void;
                            selectNode: (
                              nodeIdSelector?: string | string[]
                            ) => void;
                            clearEvents: () => void;
                            setOptions: (
                              cb: (
                                options: Partial<
                                  import('../interfaces').Options
                                >
                              ) => void
                            ) => void;
                            setIndicator: (
                              indicator: import('../interfaces').Indicator
                            ) => void;
                            reset: () => void;
                            addLinkedNodeFromTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId: string,
                              id: string
                            ) => void;
                            add: (
                              nodeToAdd: Node | Node[],
                              parentId: string,
                              index?: number
                            ) => void;
                            addNodeTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId?: string,
                              index?: number
                            ) => void;
                            delete: (selector: string | string[]) => void;
                            deserialize: (
                              input:
                                | string
                                | Record<
                                    string,
                                    import('../interfaces').SerializedNode
                                  >
                            ) => void;
                            move: (
                              selector: string | string[] | Node | Node[],
                              newParentId: string,
                              index: number
                            ) => void;
                            replaceNodes: (nodes: Record<string, Node>) => void;
                            setCustom: (
                              selector: string | string[],
                              cb: (data: any) => void
                            ) => void;
                            setHidden: (id: string, bool: boolean) => void;
                            setProp: (
                              selector: string | string[],
                              cb: (props: any) => void
                            ) => void;
                          },
                          | 'setDOM'
                          | 'setNodeEvent'
                          | 'selectNode'
                          | 'clearEvents'
                          | 'setOptions'
                          | 'setIndicator'
                          | 'reset'
                          | 'addLinkedNodeFromTree'
                          | 'add'
                          | 'addNodeTree'
                          | 'delete'
                          | 'deserialize'
                          | 'move'
                          | 'replaceNodes'
                          | 'setCustom'
                          | 'setHidden'
                          | 'setProp'
                        >;
                      };
                    },
                    | 'setDOM'
                    | 'setNodeEvent'
                    | 'selectNode'
                    | 'clearEvents'
                    | 'setOptions'
                    | 'setIndicator'
                    | 'reset'
                    | 'addLinkedNodeFromTree'
                    | 'add'
                    | 'addNodeTree'
                    | 'delete'
                    | 'deserialize'
                    | 'move'
                    | 'replaceNodes'
                    | 'setCustom'
                    | 'setHidden'
                    | 'setProp'
                  >
                ) => void
              ) => void;
            } & {
              history: {
                undo: () => void;
                redo: () => void;
                clear: () => void;
                throttle: (
                  rate?: number
                ) => Pick<
                  {
                    setDOM: (id: string, dom: HTMLElement) => void;
                    setNodeEvent: (
                      eventType: import('../interfaces').NodeEventTypes,
                      nodeIdSelector: string | string[],
                      source?: string
                    ) => void;
                    selectNode: (nodeIdSelector?: string | string[]) => void;
                    clearEvents: () => void;
                    setOptions: (
                      cb: (
                        options: Partial<import('../interfaces').Options>
                      ) => void
                    ) => void;
                    setIndicator: (
                      indicator: import('../interfaces').Indicator
                    ) => void;
                    reset: () => void;
                    addLinkedNodeFromTree: (
                      tree: import('../interfaces').NodeTree,
                      parentId: string,
                      id: string
                    ) => void;
                    add: (
                      nodeToAdd: Node | Node[],
                      parentId: string,
                      index?: number
                    ) => void;
                    addNodeTree: (
                      tree: import('../interfaces').NodeTree,
                      parentId?: string,
                      index?: number
                    ) => void;
                    delete: (selector: string | string[]) => void;
                    deserialize: (
                      input:
                        | string
                        | Record<string, import('../interfaces').SerializedNode>
                    ) => void;
                    move: (
                      selector: string | string[] | Node | Node[],
                      newParentId: string,
                      index: number
                    ) => void;
                    replaceNodes: (nodes: Record<string, Node>) => void;
                    setCustom: (
                      selector: string | string[],
                      cb: (data: any) => void
                    ) => void;
                    setHidden: (id: string, bool: boolean) => void;
                    setProp: (
                      selector: string | string[],
                      cb: (props: any) => void
                    ) => void;
                    setState: (
                      cb: (
                        state: import('../interfaces').EditorState,
                        actions: Pick<
                          {
                            setDOM: (id: string, dom: HTMLElement) => void;
                            setNodeEvent: (
                              eventType: import('../interfaces').NodeEventTypes,
                              nodeIdSelector: string | string[],
                              source?: string
                            ) => void;
                            selectNode: (
                              nodeIdSelector?: string | string[]
                            ) => void;
                            clearEvents: () => void;
                            setOptions: (
                              cb: (
                                options: Partial<
                                  import('../interfaces').Options
                                >
                              ) => void
                            ) => void;
                            setIndicator: (
                              indicator: import('../interfaces').Indicator
                            ) => void;
                            reset: () => void;
                            addLinkedNodeFromTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId: string,
                              id: string
                            ) => void;
                            add: (
                              nodeToAdd: Node | Node[],
                              parentId: string,
                              index?: number
                            ) => void;
                            addNodeTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId?: string,
                              index?: number
                            ) => void;
                            delete: (selector: string | string[]) => void;
                            deserialize: (
                              input:
                                | string
                                | Record<
                                    string,
                                    import('../interfaces').SerializedNode
                                  >
                            ) => void;
                            move: (
                              selector: string | string[] | Node | Node[],
                              newParentId: string,
                              index: number
                            ) => void;
                            replaceNodes: (nodes: Record<string, Node>) => void;
                            setCustom: (
                              selector: string | string[],
                              cb: (data: any) => void
                            ) => void;
                            setHidden: (id: string, bool: boolean) => void;
                            setProp: (
                              selector: string | string[],
                              cb: (props: any) => void
                            ) => void;
                          } & {
                            history: {
                              undo: () => void;
                              redo: () => void;
                              clear: () => void;
                              throttle: (
                                rate?: number
                              ) => Pick<
                                {
                                  setDOM: (
                                    id: string,
                                    dom: HTMLElement
                                  ) => void;
                                  setNodeEvent: (
                                    eventType: import('../interfaces').NodeEventTypes,
                                    nodeIdSelector: string | string[],
                                    source?: string
                                  ) => void;
                                  selectNode: (
                                    nodeIdSelector?: string | string[]
                                  ) => void;
                                  clearEvents: () => void;
                                  setOptions: (
                                    cb: (
                                      options: Partial<
                                        import('../interfaces').Options
                                      >
                                    ) => void
                                  ) => void;
                                  setIndicator: (
                                    indicator: import('../interfaces').Indicator
                                  ) => void;
                                  reset: () => void;
                                  addLinkedNodeFromTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId: string,
                                    id: string
                                  ) => void;
                                  add: (
                                    nodeToAdd: Node | Node[],
                                    parentId: string,
                                    index?: number
                                  ) => void;
                                  addNodeTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId?: string,
                                    index?: number
                                  ) => void;
                                  delete: (selector: string | string[]) => void;
                                  deserialize: (
                                    input:
                                      | string
                                      | Record<
                                          string,
                                          import('../interfaces').SerializedNode
                                        >
                                  ) => void;
                                  move: (
                                    selector: string | string[] | Node | Node[],
                                    newParentId: string,
                                    index: number
                                  ) => void;
                                  replaceNodes: (
                                    nodes: Record<string, Node>
                                  ) => void;
                                  setCustom: (
                                    selector: string | string[],
                                    cb: (data: any) => void
                                  ) => void;
                                  setHidden: (
                                    id: string,
                                    bool: boolean
                                  ) => void;
                                  setProp: (
                                    selector: string | string[],
                                    cb: (props: any) => void
                                  ) => void;
                                },
                                | 'setDOM'
                                | 'setNodeEvent'
                                | 'selectNode'
                                | 'clearEvents'
                                | 'setOptions'
                                | 'setIndicator'
                                | 'reset'
                                | 'addLinkedNodeFromTree'
                                | 'add'
                                | 'addNodeTree'
                                | 'delete'
                                | 'deserialize'
                                | 'move'
                                | 'replaceNodes'
                                | 'setCustom'
                                | 'setHidden'
                                | 'setProp'
                              >;
                              merge: () => Pick<
                                {
                                  setDOM: (
                                    id: string,
                                    dom: HTMLElement
                                  ) => void;
                                  setNodeEvent: (
                                    eventType: import('../interfaces').NodeEventTypes,
                                    nodeIdSelector: string | string[],
                                    source?: string
                                  ) => void;
                                  selectNode: (
                                    nodeIdSelector?: string | string[]
                                  ) => void;
                                  clearEvents: () => void;
                                  setOptions: (
                                    cb: (
                                      options: Partial<
                                        import('../interfaces').Options
                                      >
                                    ) => void
                                  ) => void;
                                  setIndicator: (
                                    indicator: import('../interfaces').Indicator
                                  ) => void;
                                  reset: () => void;
                                  addLinkedNodeFromTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId: string,
                                    id: string
                                  ) => void;
                                  add: (
                                    nodeToAdd: Node | Node[],
                                    parentId: string,
                                    index?: number
                                  ) => void;
                                  addNodeTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId?: string,
                                    index?: number
                                  ) => void;
                                  delete: (selector: string | string[]) => void;
                                  deserialize: (
                                    input:
                                      | string
                                      | Record<
                                          string,
                                          import('../interfaces').SerializedNode
                                        >
                                  ) => void;
                                  move: (
                                    selector: string | string[] | Node | Node[],
                                    newParentId: string,
                                    index: number
                                  ) => void;
                                  replaceNodes: (
                                    nodes: Record<string, Node>
                                  ) => void;
                                  setCustom: (
                                    selector: string | string[],
                                    cb: (data: any) => void
                                  ) => void;
                                  setHidden: (
                                    id: string,
                                    bool: boolean
                                  ) => void;
                                  setProp: (
                                    selector: string | string[],
                                    cb: (props: any) => void
                                  ) => void;
                                },
                                | 'setDOM'
                                | 'setNodeEvent'
                                | 'selectNode'
                                | 'clearEvents'
                                | 'setOptions'
                                | 'setIndicator'
                                | 'reset'
                                | 'addLinkedNodeFromTree'
                                | 'add'
                                | 'addNodeTree'
                                | 'delete'
                                | 'deserialize'
                                | 'move'
                                | 'replaceNodes'
                                | 'setCustom'
                                | 'setHidden'
                                | 'setProp'
                              >;
                              ignore: () => Pick<
                                {
                                  setDOM: (
                                    id: string,
                                    dom: HTMLElement
                                  ) => void;
                                  setNodeEvent: (
                                    eventType: import('../interfaces').NodeEventTypes,
                                    nodeIdSelector: string | string[],
                                    source?: string
                                  ) => void;
                                  selectNode: (
                                    nodeIdSelector?: string | string[]
                                  ) => void;
                                  clearEvents: () => void;
                                  setOptions: (
                                    cb: (
                                      options: Partial<
                                        import('../interfaces').Options
                                      >
                                    ) => void
                                  ) => void;
                                  setIndicator: (
                                    indicator: import('../interfaces').Indicator
                                  ) => void;
                                  reset: () => void;
                                  addLinkedNodeFromTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId: string,
                                    id: string
                                  ) => void;
                                  add: (
                                    nodeToAdd: Node | Node[],
                                    parentId: string,
                                    index?: number
                                  ) => void;
                                  addNodeTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId?: string,
                                    index?: number
                                  ) => void;
                                  delete: (selector: string | string[]) => void;
                                  deserialize: (
                                    input:
                                      | string
                                      | Record<
                                          string,
                                          import('../interfaces').SerializedNode
                                        >
                                  ) => void;
                                  move: (
                                    selector: string | string[] | Node | Node[],
                                    newParentId: string,
                                    index: number
                                  ) => void;
                                  replaceNodes: (
                                    nodes: Record<string, Node>
                                  ) => void;
                                  setCustom: (
                                    selector: string | string[],
                                    cb: (data: any) => void
                                  ) => void;
                                  setHidden: (
                                    id: string,
                                    bool: boolean
                                  ) => void;
                                  setProp: (
                                    selector: string | string[],
                                    cb: (props: any) => void
                                  ) => void;
                                },
                                | 'setDOM'
                                | 'setNodeEvent'
                                | 'selectNode'
                                | 'clearEvents'
                                | 'setOptions'
                                | 'setIndicator'
                                | 'reset'
                                | 'addLinkedNodeFromTree'
                                | 'add'
                                | 'addNodeTree'
                                | 'delete'
                                | 'deserialize'
                                | 'move'
                                | 'replaceNodes'
                                | 'setCustom'
                                | 'setHidden'
                                | 'setProp'
                              >;
                            };
                          },
                          | 'setDOM'
                          | 'setNodeEvent'
                          | 'selectNode'
                          | 'clearEvents'
                          | 'setOptions'
                          | 'setIndicator'
                          | 'reset'
                          | 'addLinkedNodeFromTree'
                          | 'add'
                          | 'addNodeTree'
                          | 'delete'
                          | 'deserialize'
                          | 'move'
                          | 'replaceNodes'
                          | 'setCustom'
                          | 'setHidden'
                          | 'setProp'
                        >
                      ) => void
                    ) => void;
                  },
                  | 'reset'
                  | 'addLinkedNodeFromTree'
                  | 'add'
                  | 'addNodeTree'
                  | 'delete'
                  | 'deserialize'
                  | 'move'
                  | 'replaceNodes'
                  | 'setCustom'
                  | 'setHidden'
                  | 'setProp'
                  | 'setState'
                >;
                merge: () => Pick<
                  {
                    setDOM: (id: string, dom: HTMLElement) => void;
                    setNodeEvent: (
                      eventType: import('../interfaces').NodeEventTypes,
                      nodeIdSelector: string | string[],
                      source?: string
                    ) => void;
                    selectNode: (nodeIdSelector?: string | string[]) => void;
                    clearEvents: () => void;
                    setOptions: (
                      cb: (
                        options: Partial<import('../interfaces').Options>
                      ) => void
                    ) => void;
                    setIndicator: (
                      indicator: import('../interfaces').Indicator
                    ) => void;
                    reset: () => void;
                    addLinkedNodeFromTree: (
                      tree: import('../interfaces').NodeTree,
                      parentId: string,
                      id: string
                    ) => void;
                    add: (
                      nodeToAdd: Node | Node[],
                      parentId: string,
                      index?: number
                    ) => void;
                    addNodeTree: (
                      tree: import('../interfaces').NodeTree,
                      parentId?: string,
                      index?: number
                    ) => void;
                    delete: (selector: string | string[]) => void;
                    deserialize: (
                      input:
                        | string
                        | Record<string, import('../interfaces').SerializedNode>
                    ) => void;
                    move: (
                      selector: string | string[] | Node | Node[],
                      newParentId: string,
                      index: number
                    ) => void;
                    replaceNodes: (nodes: Record<string, Node>) => void;
                    setCustom: (
                      selector: string | string[],
                      cb: (data: any) => void
                    ) => void;
                    setHidden: (id: string, bool: boolean) => void;
                    setProp: (
                      selector: string | string[],
                      cb: (props: any) => void
                    ) => void;
                    setState: (
                      cb: (
                        state: import('../interfaces').EditorState,
                        actions: Pick<
                          {
                            setDOM: (id: string, dom: HTMLElement) => void;
                            setNodeEvent: (
                              eventType: import('../interfaces').NodeEventTypes,
                              nodeIdSelector: string | string[],
                              source?: string
                            ) => void;
                            selectNode: (
                              nodeIdSelector?: string | string[]
                            ) => void;
                            clearEvents: () => void;
                            setOptions: (
                              cb: (
                                options: Partial<
                                  import('../interfaces').Options
                                >
                              ) => void
                            ) => void;
                            setIndicator: (
                              indicator: import('../interfaces').Indicator
                            ) => void;
                            reset: () => void;
                            addLinkedNodeFromTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId: string,
                              id: string
                            ) => void;
                            add: (
                              nodeToAdd: Node | Node[],
                              parentId: string,
                              index?: number
                            ) => void;
                            addNodeTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId?: string,
                              index?: number
                            ) => void;
                            delete: (selector: string | string[]) => void;
                            deserialize: (
                              input:
                                | string
                                | Record<
                                    string,
                                    import('../interfaces').SerializedNode
                                  >
                            ) => void;
                            move: (
                              selector: string | string[] | Node | Node[],
                              newParentId: string,
                              index: number
                            ) => void;
                            replaceNodes: (nodes: Record<string, Node>) => void;
                            setCustom: (
                              selector: string | string[],
                              cb: (data: any) => void
                            ) => void;
                            setHidden: (id: string, bool: boolean) => void;
                            setProp: (
                              selector: string | string[],
                              cb: (props: any) => void
                            ) => void;
                          } & {
                            history: {
                              undo: () => void;
                              redo: () => void;
                              clear: () => void;
                              throttle: (
                                rate?: number
                              ) => Pick<
                                {
                                  setDOM: (
                                    id: string,
                                    dom: HTMLElement
                                  ) => void;
                                  setNodeEvent: (
                                    eventType: import('../interfaces').NodeEventTypes,
                                    nodeIdSelector: string | string[],
                                    source?: string
                                  ) => void;
                                  selectNode: (
                                    nodeIdSelector?: string | string[]
                                  ) => void;
                                  clearEvents: () => void;
                                  setOptions: (
                                    cb: (
                                      options: Partial<
                                        import('../interfaces').Options
                                      >
                                    ) => void
                                  ) => void;
                                  setIndicator: (
                                    indicator: import('../interfaces').Indicator
                                  ) => void;
                                  reset: () => void;
                                  addLinkedNodeFromTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId: string,
                                    id: string
                                  ) => void;
                                  add: (
                                    nodeToAdd: Node | Node[],
                                    parentId: string,
                                    index?: number
                                  ) => void;
                                  addNodeTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId?: string,
                                    index?: number
                                  ) => void;
                                  delete: (selector: string | string[]) => void;
                                  deserialize: (
                                    input:
                                      | string
                                      | Record<
                                          string,
                                          import('../interfaces').SerializedNode
                                        >
                                  ) => void;
                                  move: (
                                    selector: string | string[] | Node | Node[],
                                    newParentId: string,
                                    index: number
                                  ) => void;
                                  replaceNodes: (
                                    nodes: Record<string, Node>
                                  ) => void;
                                  setCustom: (
                                    selector: string | string[],
                                    cb: (data: any) => void
                                  ) => void;
                                  setHidden: (
                                    id: string,
                                    bool: boolean
                                  ) => void;
                                  setProp: (
                                    selector: string | string[],
                                    cb: (props: any) => void
                                  ) => void;
                                },
                                | 'setDOM'
                                | 'setNodeEvent'
                                | 'selectNode'
                                | 'clearEvents'
                                | 'setOptions'
                                | 'setIndicator'
                                | 'reset'
                                | 'addLinkedNodeFromTree'
                                | 'add'
                                | 'addNodeTree'
                                | 'delete'
                                | 'deserialize'
                                | 'move'
                                | 'replaceNodes'
                                | 'setCustom'
                                | 'setHidden'
                                | 'setProp'
                              >;
                              merge: () => Pick<
                                {
                                  setDOM: (
                                    id: string,
                                    dom: HTMLElement
                                  ) => void;
                                  setNodeEvent: (
                                    eventType: import('../interfaces').NodeEventTypes,
                                    nodeIdSelector: string | string[],
                                    source?: string
                                  ) => void;
                                  selectNode: (
                                    nodeIdSelector?: string | string[]
                                  ) => void;
                                  clearEvents: () => void;
                                  setOptions: (
                                    cb: (
                                      options: Partial<
                                        import('../interfaces').Options
                                      >
                                    ) => void
                                  ) => void;
                                  setIndicator: (
                                    indicator: import('../interfaces').Indicator
                                  ) => void;
                                  reset: () => void;
                                  addLinkedNodeFromTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId: string,
                                    id: string
                                  ) => void;
                                  add: (
                                    nodeToAdd: Node | Node[],
                                    parentId: string,
                                    index?: number
                                  ) => void;
                                  addNodeTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId?: string,
                                    index?: number
                                  ) => void;
                                  delete: (selector: string | string[]) => void;
                                  deserialize: (
                                    input:
                                      | string
                                      | Record<
                                          string,
                                          import('../interfaces').SerializedNode
                                        >
                                  ) => void;
                                  move: (
                                    selector: string | string[] | Node | Node[],
                                    newParentId: string,
                                    index: number
                                  ) => void;
                                  replaceNodes: (
                                    nodes: Record<string, Node>
                                  ) => void;
                                  setCustom: (
                                    selector: string | string[],
                                    cb: (data: any) => void
                                  ) => void;
                                  setHidden: (
                                    id: string,
                                    bool: boolean
                                  ) => void;
                                  setProp: (
                                    selector: string | string[],
                                    cb: (props: any) => void
                                  ) => void;
                                },
                                | 'setDOM'
                                | 'setNodeEvent'
                                | 'selectNode'
                                | 'clearEvents'
                                | 'setOptions'
                                | 'setIndicator'
                                | 'reset'
                                | 'addLinkedNodeFromTree'
                                | 'add'
                                | 'addNodeTree'
                                | 'delete'
                                | 'deserialize'
                                | 'move'
                                | 'replaceNodes'
                                | 'setCustom'
                                | 'setHidden'
                                | 'setProp'
                              >;
                              ignore: () => Pick<
                                {
                                  setDOM: (
                                    id: string,
                                    dom: HTMLElement
                                  ) => void;
                                  setNodeEvent: (
                                    eventType: import('../interfaces').NodeEventTypes,
                                    nodeIdSelector: string | string[],
                                    source?: string
                                  ) => void;
                                  selectNode: (
                                    nodeIdSelector?: string | string[]
                                  ) => void;
                                  clearEvents: () => void;
                                  setOptions: (
                                    cb: (
                                      options: Partial<
                                        import('../interfaces').Options
                                      >
                                    ) => void
                                  ) => void;
                                  setIndicator: (
                                    indicator: import('../interfaces').Indicator
                                  ) => void;
                                  reset: () => void;
                                  addLinkedNodeFromTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId: string,
                                    id: string
                                  ) => void;
                                  add: (
                                    nodeToAdd: Node | Node[],
                                    parentId: string,
                                    index?: number
                                  ) => void;
                                  addNodeTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId?: string,
                                    index?: number
                                  ) => void;
                                  delete: (selector: string | string[]) => void;
                                  deserialize: (
                                    input:
                                      | string
                                      | Record<
                                          string,
                                          import('../interfaces').SerializedNode
                                        >
                                  ) => void;
                                  move: (
                                    selector: string | string[] | Node | Node[],
                                    newParentId: string,
                                    index: number
                                  ) => void;
                                  replaceNodes: (
                                    nodes: Record<string, Node>
                                  ) => void;
                                  setCustom: (
                                    selector: string | string[],
                                    cb: (data: any) => void
                                  ) => void;
                                  setHidden: (
                                    id: string,
                                    bool: boolean
                                  ) => void;
                                  setProp: (
                                    selector: string | string[],
                                    cb: (props: any) => void
                                  ) => void;
                                },
                                | 'setDOM'
                                | 'setNodeEvent'
                                | 'selectNode'
                                | 'clearEvents'
                                | 'setOptions'
                                | 'setIndicator'
                                | 'reset'
                                | 'addLinkedNodeFromTree'
                                | 'add'
                                | 'addNodeTree'
                                | 'delete'
                                | 'deserialize'
                                | 'move'
                                | 'replaceNodes'
                                | 'setCustom'
                                | 'setHidden'
                                | 'setProp'
                              >;
                            };
                          },
                          | 'setDOM'
                          | 'setNodeEvent'
                          | 'selectNode'
                          | 'clearEvents'
                          | 'setOptions'
                          | 'setIndicator'
                          | 'reset'
                          | 'addLinkedNodeFromTree'
                          | 'add'
                          | 'addNodeTree'
                          | 'delete'
                          | 'deserialize'
                          | 'move'
                          | 'replaceNodes'
                          | 'setCustom'
                          | 'setHidden'
                          | 'setProp'
                        >
                      ) => void
                    ) => void;
                  },
                  | 'reset'
                  | 'addLinkedNodeFromTree'
                  | 'add'
                  | 'addNodeTree'
                  | 'delete'
                  | 'deserialize'
                  | 'move'
                  | 'replaceNodes'
                  | 'setCustom'
                  | 'setHidden'
                  | 'setProp'
                  | 'setState'
                >;
                ignore: () => Pick<
                  {
                    setDOM: (id: string, dom: HTMLElement) => void;
                    setNodeEvent: (
                      eventType: import('../interfaces').NodeEventTypes,
                      nodeIdSelector: string | string[],
                      source?: string
                    ) => void;
                    selectNode: (nodeIdSelector?: string | string[]) => void;
                    clearEvents: () => void;
                    setOptions: (
                      cb: (
                        options: Partial<import('../interfaces').Options>
                      ) => void
                    ) => void;
                    setIndicator: (
                      indicator: import('../interfaces').Indicator
                    ) => void;
                    reset: () => void;
                    addLinkedNodeFromTree: (
                      tree: import('../interfaces').NodeTree,
                      parentId: string,
                      id: string
                    ) => void;
                    add: (
                      nodeToAdd: Node | Node[],
                      parentId: string,
                      index?: number
                    ) => void;
                    addNodeTree: (
                      tree: import('../interfaces').NodeTree,
                      parentId?: string,
                      index?: number
                    ) => void;
                    delete: (selector: string | string[]) => void;
                    deserialize: (
                      input:
                        | string
                        | Record<string, import('../interfaces').SerializedNode>
                    ) => void;
                    move: (
                      selector: string | string[] | Node | Node[],
                      newParentId: string,
                      index: number
                    ) => void;
                    replaceNodes: (nodes: Record<string, Node>) => void;
                    setCustom: (
                      selector: string | string[],
                      cb: (data: any) => void
                    ) => void;
                    setHidden: (id: string, bool: boolean) => void;
                    setProp: (
                      selector: string | string[],
                      cb: (props: any) => void
                    ) => void;
                    setState: (
                      cb: (
                        state: import('../interfaces').EditorState,
                        actions: Pick<
                          {
                            setDOM: (id: string, dom: HTMLElement) => void;
                            setNodeEvent: (
                              eventType: import('../interfaces').NodeEventTypes,
                              nodeIdSelector: string | string[],
                              source?: string
                            ) => void;
                            selectNode: (
                              nodeIdSelector?: string | string[]
                            ) => void;
                            clearEvents: () => void;
                            setOptions: (
                              cb: (
                                options: Partial<
                                  import('../interfaces').Options
                                >
                              ) => void
                            ) => void;
                            setIndicator: (
                              indicator: import('../interfaces').Indicator
                            ) => void;
                            reset: () => void;
                            addLinkedNodeFromTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId: string,
                              id: string
                            ) => void;
                            add: (
                              nodeToAdd: Node | Node[],
                              parentId: string,
                              index?: number
                            ) => void;
                            addNodeTree: (
                              tree: import('../interfaces').NodeTree,
                              parentId?: string,
                              index?: number
                            ) => void;
                            delete: (selector: string | string[]) => void;
                            deserialize: (
                              input:
                                | string
                                | Record<
                                    string,
                                    import('../interfaces').SerializedNode
                                  >
                            ) => void;
                            move: (
                              selector: string | string[] | Node | Node[],
                              newParentId: string,
                              index: number
                            ) => void;
                            replaceNodes: (nodes: Record<string, Node>) => void;
                            setCustom: (
                              selector: string | string[],
                              cb: (data: any) => void
                            ) => void;
                            setHidden: (id: string, bool: boolean) => void;
                            setProp: (
                              selector: string | string[],
                              cb: (props: any) => void
                            ) => void;
                          } & {
                            history: {
                              undo: () => void;
                              redo: () => void;
                              clear: () => void;
                              throttle: (
                                rate?: number
                              ) => Pick<
                                {
                                  setDOM: (
                                    id: string,
                                    dom: HTMLElement
                                  ) => void;
                                  setNodeEvent: (
                                    eventType: import('../interfaces').NodeEventTypes,
                                    nodeIdSelector: string | string[],
                                    source?: string
                                  ) => void;
                                  selectNode: (
                                    nodeIdSelector?: string | string[]
                                  ) => void;
                                  clearEvents: () => void;
                                  setOptions: (
                                    cb: (
                                      options: Partial<
                                        import('../interfaces').Options
                                      >
                                    ) => void
                                  ) => void;
                                  setIndicator: (
                                    indicator: import('../interfaces').Indicator
                                  ) => void;
                                  reset: () => void;
                                  addLinkedNodeFromTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId: string,
                                    id: string
                                  ) => void;
                                  add: (
                                    nodeToAdd: Node | Node[],
                                    parentId: string,
                                    index?: number
                                  ) => void;
                                  addNodeTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId?: string,
                                    index?: number
                                  ) => void;
                                  delete: (selector: string | string[]) => void;
                                  deserialize: (
                                    input:
                                      | string
                                      | Record<
                                          string,
                                          import('../interfaces').SerializedNode
                                        >
                                  ) => void;
                                  move: (
                                    selector: string | string[] | Node | Node[],
                                    newParentId: string,
                                    index: number
                                  ) => void;
                                  replaceNodes: (
                                    nodes: Record<string, Node>
                                  ) => void;
                                  setCustom: (
                                    selector: string | string[],
                                    cb: (data: any) => void
                                  ) => void;
                                  setHidden: (
                                    id: string,
                                    bool: boolean
                                  ) => void;
                                  setProp: (
                                    selector: string | string[],
                                    cb: (props: any) => void
                                  ) => void;
                                },
                                | 'setDOM'
                                | 'setNodeEvent'
                                | 'selectNode'
                                | 'clearEvents'
                                | 'setOptions'
                                | 'setIndicator'
                                | 'reset'
                                | 'addLinkedNodeFromTree'
                                | 'add'
                                | 'addNodeTree'
                                | 'delete'
                                | 'deserialize'
                                | 'move'
                                | 'replaceNodes'
                                | 'setCustom'
                                | 'setHidden'
                                | 'setProp'
                              >;
                              merge: () => Pick<
                                {
                                  setDOM: (
                                    id: string,
                                    dom: HTMLElement
                                  ) => void;
                                  setNodeEvent: (
                                    eventType: import('../interfaces').NodeEventTypes,
                                    nodeIdSelector: string | string[],
                                    source?: string
                                  ) => void;
                                  selectNode: (
                                    nodeIdSelector?: string | string[]
                                  ) => void;
                                  clearEvents: () => void;
                                  setOptions: (
                                    cb: (
                                      options: Partial<
                                        import('../interfaces').Options
                                      >
                                    ) => void
                                  ) => void;
                                  setIndicator: (
                                    indicator: import('../interfaces').Indicator
                                  ) => void;
                                  reset: () => void;
                                  addLinkedNodeFromTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId: string,
                                    id: string
                                  ) => void;
                                  add: (
                                    nodeToAdd: Node | Node[],
                                    parentId: string,
                                    index?: number
                                  ) => void;
                                  addNodeTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId?: string,
                                    index?: number
                                  ) => void;
                                  delete: (selector: string | string[]) => void;
                                  deserialize: (
                                    input:
                                      | string
                                      | Record<
                                          string,
                                          import('../interfaces').SerializedNode
                                        >
                                  ) => void;
                                  move: (
                                    selector: string | string[] | Node | Node[],
                                    newParentId: string,
                                    index: number
                                  ) => void;
                                  replaceNodes: (
                                    nodes: Record<string, Node>
                                  ) => void;
                                  setCustom: (
                                    selector: string | string[],
                                    cb: (data: any) => void
                                  ) => void;
                                  setHidden: (
                                    id: string,
                                    bool: boolean
                                  ) => void;
                                  setProp: (
                                    selector: string | string[],
                                    cb: (props: any) => void
                                  ) => void;
                                },
                                | 'setDOM'
                                | 'setNodeEvent'
                                | 'selectNode'
                                | 'clearEvents'
                                | 'setOptions'
                                | 'setIndicator'
                                | 'reset'
                                | 'addLinkedNodeFromTree'
                                | 'add'
                                | 'addNodeTree'
                                | 'delete'
                                | 'deserialize'
                                | 'move'
                                | 'replaceNodes'
                                | 'setCustom'
                                | 'setHidden'
                                | 'setProp'
                              >;
                              ignore: () => Pick<
                                {
                                  setDOM: (
                                    id: string,
                                    dom: HTMLElement
                                  ) => void;
                                  setNodeEvent: (
                                    eventType: import('../interfaces').NodeEventTypes,
                                    nodeIdSelector: string | string[],
                                    source?: string
                                  ) => void;
                                  selectNode: (
                                    nodeIdSelector?: string | string[]
                                  ) => void;
                                  clearEvents: () => void;
                                  setOptions: (
                                    cb: (
                                      options: Partial<
                                        import('../interfaces').Options
                                      >
                                    ) => void
                                  ) => void;
                                  setIndicator: (
                                    indicator: import('../interfaces').Indicator
                                  ) => void;
                                  reset: () => void;
                                  addLinkedNodeFromTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId: string,
                                    id: string
                                  ) => void;
                                  add: (
                                    nodeToAdd: Node | Node[],
                                    parentId: string,
                                    index?: number
                                  ) => void;
                                  addNodeTree: (
                                    tree: import('../interfaces').NodeTree,
                                    parentId?: string,
                                    index?: number
                                  ) => void;
                                  delete: (selector: string | string[]) => void;
                                  deserialize: (
                                    input:
                                      | string
                                      | Record<
                                          string,
                                          import('../interfaces').SerializedNode
                                        >
                                  ) => void;
                                  move: (
                                    selector: string | string[] | Node | Node[],
                                    newParentId: string,
                                    index: number
                                  ) => void;
                                  replaceNodes: (
                                    nodes: Record<string, Node>
                                  ) => void;
                                  setCustom: (
                                    selector: string | string[],
                                    cb: (data: any) => void
                                  ) => void;
                                  setHidden: (
                                    id: string,
                                    bool: boolean
                                  ) => void;
                                  setProp: (
                                    selector: string | string[],
                                    cb: (props: any) => void
                                  ) => void;
                                },
                                | 'setDOM'
                                | 'setNodeEvent'
                                | 'selectNode'
                                | 'clearEvents'
                                | 'setOptions'
                                | 'setIndicator'
                                | 'reset'
                                | 'addLinkedNodeFromTree'
                                | 'add'
                                | 'addNodeTree'
                                | 'delete'
                                | 'deserialize'
                                | 'move'
                                | 'replaceNodes'
                                | 'setCustom'
                                | 'setHidden'
                                | 'setProp'
                              >;
                            };
                          },
                          | 'setDOM'
                          | 'setNodeEvent'
                          | 'selectNode'
                          | 'clearEvents'
                          | 'setOptions'
                          | 'setIndicator'
                          | 'reset'
                          | 'addLinkedNodeFromTree'
                          | 'add'
                          | 'addNodeTree'
                          | 'delete'
                          | 'deserialize'
                          | 'move'
                          | 'replaceNodes'
                          | 'setCustom'
                          | 'setHidden'
                          | 'setProp'
                        >
                      ) => void
                    ) => void;
                  },
                  | 'reset'
                  | 'addLinkedNodeFromTree'
                  | 'add'
                  | 'addNodeTree'
                  | 'delete'
                  | 'deserialize'
                  | 'move'
                  | 'replaceNodes'
                  | 'setCustom'
                  | 'setHidden'
                  | 'setProp'
                  | 'setState'
                >;
              };
            };
            query: {
              getDropPlaceholder: (
                source: string | string[] | Node | Node[],
                target: string,
                pos: {
                  x: number;
                  y: number;
                },
                nodesToDOM?: (node: Node) => HTMLElement
              ) => import('../interfaces').Indicator;
              getOptions: () => import('../interfaces').Options;
              getNodes: () => Record<string, Node>;
              node: (
                id: string
              ) => {
                isCanvas(): boolean;
                isRoot(): boolean;
                isLinkedNode(): boolean;
                isTopLevelNode(): any;
                isDeletable(): boolean;
                isParentOfTopLevelNodes: () => boolean;
                isParentOfTopLevelCanvas(): any;
                isSelected(): boolean;
                isHovered(): boolean;
                isDragged(): boolean;
                get(): Node;
                ancestors(deep?: boolean): string[];
                descendants(
                  deep?: boolean,
                  includeOnly?: 'linkedNodes' | 'childNodes'
                ): string[];
                linkedNodes(): string[];
                childNodes(): string[];
                isDraggable(onError?: (err: string) => void): boolean;
                isDroppable(
                  selector: string | string[] | Node | Node[],
                  onError?: (err: string) => void
                ): boolean;
                toSerializedNode(): import('../interfaces').SerializedNode;
                toNodeTree(
                  includeOnly?: 'linkedNodes' | 'childNodes'
                ): {
                  rootNodeId: string;
                  nodes: any;
                };
                decendants(deep?: boolean): any;
                isTopLevelCanvas(): boolean;
              };
              getSerializedNodes: () => Record<
                string,
                import('../interfaces').SerializedNode
              >;
              getEvent: (
                eventType: import('../interfaces').NodeEventTypes
              ) => {
                contains(id: string): boolean;
                isEmpty(): boolean;
                first(): any;
                last(): any;
                all(): string[];
                size(): any;
                at(i: number): any;
                raw(): Set<string>;
              };
              serialize: () => string;
              parseReactElement: (
                reactElement: import('react').ReactElement<
                  any,
                  | string
                  | ((props: any) => import('react').ReactElement<any, any>)
                  | (new (props: any) => import('react').Component<
                      any,
                      any,
                      any
                    >)
                >
              ) => {
                toNodeTree(
                  normalize?: (
                    node: Node,
                    jsx: import('react').ReactElement<
                      any,
                      | string
                      | ((props: any) => import('react').ReactElement<any, any>)
                      | (new (props: any) => import('react').Component<
                          any,
                          any,
                          any
                        >)
                    >
                  ) => void
                ): import('../interfaces').NodeTree;
              };
              parseSerializedNode: (
                serializedNode: import('../interfaces').SerializedNode
              ) => {
                toNode(normalize?: (node: Node) => void): Node;
              };
              parseFreshNode: (
                node: import('../interfaces').FreshNode
              ) => {
                toNode(normalize?: (node: Node) => void): Node;
              };
              createNode: (
                reactElement: import('react').ReactElement<
                  any,
                  | string
                  | ((props: any) => import('react').ReactElement<any, any>)
                  | (new (props: any) => import('react').Component<
                      any,
                      any,
                      any
                    >)
                >,
                extras?: any
              ) => any;
              getState: () => import('../interfaces').EditorState;
            } & {
              history: {
                canUndo: () => boolean;
                canRedo: () => boolean;
              };
            };
          }
        >,
        'query' | 'actions' | 'connectors'
      >,
      'actions' | 'connectors' | 'id' | 'related' | 'inNodeContext'
    >
> & {
  actions: {
    setProp: (cb: any, throttleRate?: number) => void;
    setCustom: (cb: any, throttleRate?: number) => void;
    setHidden: (bool: boolean) => void;
  };
  id: string;
  related: boolean;
  setProp: (
    cb: (props: Record<string, any>) => void,
    throttleRate?: number
  ) => void;
  inNodeContext: boolean;
  connectors: import('craftjs-utils-meetovo').ChainableConnectors<
    {
      connect: (dom: HTMLElement) => HTMLElement;
      drag: (dom: HTMLElement) => HTMLElement;
    },
    | HTMLElement
    | import('react').ReactElement<
        any,
        | string
        | ((props: any) => import('react').ReactElement<any, any>)
        | (new (props: any) => import('react').Component<any, any, any>)
      >
  >;
};
